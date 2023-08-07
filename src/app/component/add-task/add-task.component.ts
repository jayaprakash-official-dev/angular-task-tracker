import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MockTask } from "src/app/models/mock-task-model";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  @Output() postTaskFun: EventEmitter<MockTask> = new EventEmitter();

  id: number = Math.floor(Math.random() * 1000000);
  text: string;
  day: string = "Mar 32, 2023 3:30 PM";
  reminder: boolean = false;

  constructor() {}

  ngOnInit() {}

  makeFormValueToDefault() {
    this.id = Math.floor(Math.random() * 10000000);
    this.text = "";
    this.day = "Mar 32, 2023 3:30 PM";
    this.reminder = false;
  }

  onSubmit() {
    const postObject: MockTask = {
      id: +this.id,
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.postTaskFun.emit(postObject);
    // After saving make state to default
    this.makeFormValueToDefault();
  }
}
