import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../models/user';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
  users: User[] = [];
  user!: User;
  createUserForm!: FormGroup;
  userIncomeForm!: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public dialogRef: MatDialogRef<CreateProfileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              private userService: UserService) { }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      userFirstName: new FormControl(null),
      userLastName: new FormControl(null),
      userHouseholdId: new FormControl(null),
      userEmailAddress: new FormControl(null),
      userPhoneNumber: new FormControl(null),
      userProfileImageUrl: new FormControl(null),
      userEmployer: new FormControl(null),
      userJobTitle: new FormControl(null),
      userAnnualSalary: new FormControl(null),
      userAnnualBonusIncome: new FormControl(null),
    });

    
  }

  public getUsers(): void {
    this.users = [];
    this.userService.getUsers().subscribe({
      next: data => {
        this.users = data;
      }, 
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
      complete: () => {
        console.log("all user profiles loaded after created new")
      }
    });
  }

  public onCreateUserProfile(formData: User): void {
    this.userService.createUser(formData).subscribe({
      next: (response: User) => {
        console.log(response);
        this.getUsers();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.createUserForm.reset()
      }, 
      complete: () => {
        console.log(this.users);
        this.createUserForm.reset();
      }
    });
  }

  

  onNoClick(): void {
    this.dialogRef.close();
  }

}