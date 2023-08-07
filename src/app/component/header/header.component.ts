import { Component, OnInit } from "@angular/core";
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  headerTitle = "Angular Application - TODO";
  btnStatus: boolean = true;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.btnStatus = value));
  }

  ngOnInit() {}

  click() {
    console.log("Clicked !");
    this.uiService.toggleShowOrHide();
  }
}
