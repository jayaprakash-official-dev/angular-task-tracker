import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  headerTitle = "Angular Application - TODO";

  constructor() {}

  ngOnInit() {}

  click() {
    console.log("Clicked !");
  }
}
