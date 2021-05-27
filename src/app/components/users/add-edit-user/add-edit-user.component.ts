import { User } from './../userModel';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  userID: number;
  user: User;
  addMode: boolean;

  constructor(
    private dialogRef: MatDialogRef<AddEditUserComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: number
  ) {
    this.userID = data;
    this.addMode = data == 0;
  }

  ngOnInit() {
    if (!this.addMode) {
      this.getUser();
    }
  }

  getUser() {
    this.user = {
      UserID: 1,
      AssociateNumber: 1070218,
      FirstName: "Sagar",
      LastName: "Khairnar",
      Location: "2",
      IsActive: false
    };
  }

  resetForm(form: NgForm) {
    form.reset(this.userForm);
    this.dialogRef.close();
  }

  userObj = {};
  saveUser(form: NgForm) {
    this.userObj = {
      UserID: form.value.UserID,
      AssociateNumber: form.value.AssociateNumber,
      FirstName: form.value.FirstName,
      LastName: form.value.LastName,
      Location: form.value.Location,
      IsActive: form.value.IsActive
    };

    console.log('User Data - ' + JSON.stringify(this.userObj));
    this.dialogRef.close({ 'DialogResult': 'Saved' });
  }

  userForm = new FormGroup({
    AssociateNumber: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]+")]),
    FirstName: new FormControl("", [Validators.required, Validators.maxLength(50), Validators.pattern("[a-zA-Z_ ]+$")]),
    LastName: new FormControl("", [Validators.required, Validators.maxLength(50), Validators.pattern("[a-zA-Z_ ]+$")]),
    Location: new FormControl("", [Validators.required]),
    IsActive: new FormControl("", [Validators.required]),
  });
}
