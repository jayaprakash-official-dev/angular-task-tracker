import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
//components
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { ButtonComponent } from "./component/button/button.component";
import { TasksComponent } from "./component/tasks/tasks.component";
import { TaskItemComponent } from "./component/task-item/task-item.component";
import { AddTaskComponent } from "./component/add-task/add-task.component";

const appRoutes: Routes = [
  {
    path: "",
    component: TasksComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
