import { User } from './userModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['AssociateNumber', 'FirstName', 'LastName', 'Location', 'IsActive', 'Action'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {

    let users = this.getDummyUsers();
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(user?: User): void {
    const userID = (user === undefined) ? 0 : user.UserID;
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      width: '60%',
      //height: '70%',
      disableClose: true,
      autoFocus: true,
      data: userID
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Response - ' + JSON.stringify(result));
      if (result['DialogResult'] == "Saved") {
        alert('Refresh data');
      }
    });
  }

  getDummyUsers() {
    const users: User[] = [
      {
        UserID: 1,
        AssociateNumber: 1070218,
        FirstName: "Sagar",
        LastName: "Khairnar",
        Location: "2",
        IsActive: true
      },
      {
        UserID: 2,
        AssociateNumber: 10708,
        FirstName: "Vishal",
        LastName: "Yadav",
        Location: "2",
        IsActive: false
      },
    ];

    return users;
  }
}