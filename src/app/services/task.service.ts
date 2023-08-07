import { Injectable } from "@angular/core";
import { MockTask } from "../models/mock-task-model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const HeaderOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};
@Injectable({
  providedIn: "root",
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) {}

  getTasks(): Observable<MockTask[]> {
    return this.http.get<MockTask[]>(this.apiUrl);
  }

  deleteTask(task: MockTask): Observable<MockTask> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<MockTask>(url);
  }

  updateTask(task: MockTask): Observable<MockTask> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<MockTask>(url, task, HeaderOptions);
  }

  postTask(task: MockTask): Observable<MockTask> {
    return this.http.post<MockTask>(this.apiUrl, task);
  }
}
