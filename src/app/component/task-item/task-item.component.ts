import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MockTask } from "../../models/mock-task-model";
@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"],
})
export class TaskItemComponent implements OnInit {
  @Input() task: MockTask;
  @Output() onDeleteFn: EventEmitter<MockTask> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onDelete(task: MockTask) {
    this.onDeleteFn.emit(task);
  }
}
