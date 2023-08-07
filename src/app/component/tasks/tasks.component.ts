import { Component, OnInit } from "@angular/core";
import { TASK } from "../../db/mock-task";
import { MockTask } from "../../models/mock-task-model";
import { TaskService } from "../../services/task.service";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  tasks: MockTask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: MockTask) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        (deleteTask) =>
          (this.tasks = this.tasks.filter((item) => item.id !== task.id))
      );
  }
}
