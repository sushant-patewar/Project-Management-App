import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Task } from '../TaskModel';
import { Project } from '../../projects/projectModel';
import { Sprint } from '../../sprints/sprintModel';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent implements OnInit {

  public task: Task;
  public taskID: number;
  public projects: Project[];
  public sprints: Sprint[];

  addMode: boolean;

  constructor(
    private dialogRef: MatDialogRef<AddEditTaskComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: number
  ) {
    this.taskID = data;
    this.addMode = data == 0;
  }


  ngOnInit() {
    if (!this.addMode) {
      this.getDummyTask();
    }
  }


  getDummyTask() {
    this.task = { TaskID: 1, TaskSummary: "Task Summary 1", TaskType: "Task", ParentID: 0, EstimatedStartDate: new Date(), EstimatedEndDate: new Date() };
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

  saveTask(form: NgForm) { }

  taskForm = new FormGroup({
    //AssociateNumber: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]+")]),
    TaskSummary: new FormControl("", [Validators.required, Validators.maxLength(100), Validators.pattern("[a-zA-Z_ ]+$")]),
    //Description: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z_ ]+$")]),
    //TaskType: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z_ ]+$")]),
    //ParentID: new FormControl("", [Validators.required]),
    EstimatedStartDate: new FormControl("", [Validators.required]),
    EstimatedEndDate: new FormControl("", [Validators.required]),
    //EstimatedEffortsHrs: new FormControl("", [Validators.required]),
    //Assignee: new FormControl("", [Validators.required]),
    //Reporter: new FormControl("", [Validators.required]),
    //IsDeleted: new FormControl("", [Validators.required]),
  });
}
