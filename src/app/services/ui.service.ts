import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UiService {
  private showOrHide: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleShowOrHide() {
    this.showOrHide = !this.showOrHide;
    this.subject.next(this.showOrHide);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
