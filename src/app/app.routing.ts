import { ProjectsComponent } from './components/projects/projects.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { LogEffortsComponent } from './components/log-efforts/log-efforts.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ManageTasksComponent } from './components/manage-tasks/manage-tasks.component';
import { SprintsComponent } from './components/sprints/sprints.component';

export const AppRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'logefforts', component: LogEffortsComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'sprints', component: SprintsComponent },
    { path: 'tasks', component: ManageTasksComponent }
];