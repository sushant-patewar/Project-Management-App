import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { LogEffortsComponent } from './log-efforts/log-efforts.component';
import { ReportsComponent } from './reports/reports.component';
import { AppMaterialModule } from '../appMaterialModule.module';
import { AddEditUserComponent } from './users/add-edit-user/add-edit-user.component';
import { SprintsComponent } from './sprints/sprints.component';
import { AddEditSprintComponent } from './sprints/add-edit-sprint/add-edit-sprint.component';
import { AddEditProjectComponent } from './projects/add-edit-project/add-edit-project.component';
import { ManageTasksComponent } from './manage-tasks/manage-tasks.component';
import { AddEditTaskComponent } from './manage-tasks/add-edit-task/add-edit-task.component';
//import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppMaterialModule,
    ],
    exports: [
        AddEditUserComponent,
        AddEditTaskComponent,
    ],
    declarations: [
        DashboardComponent,
        UsersComponent,
        ProjectsComponent,
        LogEffortsComponent,
        ReportsComponent,
        AddEditUserComponent,
        SprintsComponent,
        AddEditSprintComponent,
        AddEditProjectComponent,
        ManageTasksComponent,
        AddEditTaskComponent,
    ],
    entryComponents: [
        AddEditUserComponent,
        AddEditTaskComponent,
    ],
})
export class AppComponentModule { }