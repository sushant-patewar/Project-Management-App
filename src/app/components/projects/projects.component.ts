import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from './projectModel';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];
  public filterProjects: Project[] = [];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    this.getDummyProjects();
    this.filterProjects = JSON.parse(JSON.stringify(this.projects));
  }

  applyFilter(filterValue: string) {
    if (filterValue === "") {
      this.filterProjects = JSON.parse(JSON.stringify(this.projects));
    } else {
      this.filterProjects = JSON.parse(JSON.stringify(this.projects.filter(element => {
        return element.ProjectName.toLowerCase().includes(filterValue.trim().toLowerCase());
      })));
    }
  }

  openDialog(user?: Project): void {
    // const userID = (user === undefined) ? 0 : user.UserID;
    // const dialogRef = this.dialog.open(AddEditUserComponent, {
    //   width: '60%',
    //   //height: '70%',
    //   disableClose: true,
    //   autoFocus: true,
    //   data: userID
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Response - ' + JSON.stringify(result));
    //   if (result['DialogResult'] == "Saved") {
    //     alert('Refresh data');
    //   }
    // });
  }

  getDummyProjects() {
    for (var i = 1; i <= 12; i++) {
      this.projects.push({
        ProjectID: i,
        ProjectName: "Project " + i,
        IsActive: i % 2 == 0
      });
    }
  }
}