import { Sprint } from './../sprints/sprintModel';
import { Project } from './../projects/projectModel';
import { Task } from './TaskModel';
import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormCustomValidators, RequireMatch } from 'src/app/infrastructure/validations/form-custom-validators';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';

@Component({
  selector: 'app-manage-tasks',
  templateUrl: './manage-tasks.component.html',
  styleUrls: ['./manage-tasks.component.scss']
})
export class ManageTasksComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['TaskIcon', 'TaskType', 'TaskID', 'ParentID', 'TaskSummary', 'Action', 'LogEfforts'];
  dataSource: MatTableDataSource<Task>;

  public tasks: Task[];
  public projects: Project[];
  public sprints: Sprint[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  filteredProjects: Observable<Project[]>;
  filteredSprints: Observable<Sprint[]>;

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {

    this.getDummyProjects();
    this.getDummySprints();

    // Autocomplete filter Projets
    this.filteredProjects = this.manageTaskForm.controls["projectControl"].valueChanges
      .pipe(
        startWith<string | Project>(''),
        map(value => typeof value === 'string' ? value : value.ProjectName),
        map(name => name ? this._filterProject(name) : this.projects.slice())
      );

    // Autocomplete filter Sprint
    this.filteredSprints = this.manageTaskForm.controls["sprintControl"].valueChanges
      .pipe(
        startWith<string | Sprint>(''),
        map(value => typeof value === 'string' ? value : value.SprintName),
        map(name => name ? this._filterSprint(name) : this.sprints.slice())
      );
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  private _filterProject(name: string): Project[] {
    const filterValue = name.toLowerCase();

    return this.projects.filter(option => option.ProjectName.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterSprint(name: string): Sprint[] {
    const filterValue = name.toLowerCase();

    return this.sprints.filter(option => option.SprintName.toLowerCase().indexOf(filterValue) === 0);
  }

  displaySelectedProject(project?: Project): string | undefined {
    return project ? project.ProjectName : undefined;
  }

  displaySelectedSprint(sprint?: Sprint): string | undefined {
    return sprint ? sprint.SprintName : undefined;
  }

  openDialog(task?: Task): void {
    const taskID = (task === undefined) ? 0 : task.TaskID;
    const dialogRef = this.dialog.open(AddEditTaskComponent, {
      width: '80%',
      height: '90%',
      disableClose: true,
      autoFocus: true,
      data: taskID
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Response - ' + JSON.stringify(result));
      if (result['DialogResult'] == "Saved") {
        alert('Refresh data');
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyCheckFilter(checkedValue: string) {
    if (checkedValue === 'All') {
      this.dataSource.filter = '';
    }
    else {
      let filteredData = this.tasks.filter(ele => { return ele.TaskType === 'Task' && ele.TaskType === checkedValue });
      //this.dataSource = new MatTableDataSource(filteredData);
      this.dataSource.filter = 'Task ' && checkedValue;
    }
  }

  loadTasks(form: NgForm) {
    this.getDummyTasks();
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.tasks);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDummyTasks() {
    this.tasks = [];
    for (let i = 1; i <= 10; i++) {

      let task: Task = { TaskID: i, TaskSummary: "Task " + i, TaskType: "Task", ParentID: 0 };
      this.tasks.push(task);

      for (let j = 1; j <= 5; j++) {
        let subtask: Task = { TaskID: j, TaskSummary: "SubTask " + j, TaskType: "SubTask", ParentID: i };
        this.tasks.push(subtask);
      }

      for (let k = 1; k <= 2; k++) {
        let defect: Task = { TaskID: k, TaskSummary: "Defect " + k, TaskType: "Defect", ParentID: i };
        this.tasks.push(defect);
      }

      for (let j = 1; j <= 2; j++) {
        let subtask: Task = { TaskID: j, TaskSummary: "WishList " + j, TaskType: "WishList", ParentID: i };
        this.tasks.push(subtask);
      }
    }
  }

  getDummyProjects() {
    this.projects = [];
    for (var i = 1; i <= 12; i++) {
      this.projects.push({
        ProjectID: i,
        ProjectName: "Project " + i,
        IsActive: i % 2 == 0
      });
    }
  }

  getDummySprints() {
    this.sprints = [];
    for (var i = 1; i <= 12; i++) {
      this.sprints.push({
        SprintID: i,
        ProjectID: 100,
        SprintName: "Sprint " + i,
        Status: i % 2 == 0 ? "In Progress" : i % 3 == 0 ? "Completed" : "Backlog",
        IsActive: i % 2 == 0
      });
    }
  }

  manageTaskForm = new FormGroup({
    projectControl: new FormControl("", [Validators.required, RequireMatch]),
    sprintControl: new FormControl("", [Validators.required, RequireMatch])
  });
}
