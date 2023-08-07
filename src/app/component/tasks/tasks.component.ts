import { Component, OnInit } from "@angular/core";
import { TASK } from "../../db/mock-task";
import { MockTask } from "../../models/mock-task-model";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  tasks: MockTask[] = TASK;

  constructor() {}

  ngOnInit() {}
}
