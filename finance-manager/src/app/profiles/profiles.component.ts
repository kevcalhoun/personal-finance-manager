import { Component, OnInit } from '@angular/core';

import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

import { MatDialog } from '@angular/material/dialog';
import { User } from './models/user';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  // user profile properties
  public user!: User;
  public users: User[] = [];
  isLoading = false;
  // Snackbar message properties
  durationInSeconds = 3;

  constructor(public dialog: MatDialog,
    private userService: UserService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.getUsers();
  }

  public getUsers(): void {
    this.isLoading = true;
    this.users = [];
    this.userService.getUsers().subscribe({
      next: data => {
        this.users = data;
      }, 
      error: (err: HttpErrorResponse) => {
        alert(err.message);
        this.isLoading = false;
      },
      complete: () => {
        console.log(this.users);
        this.isLoading = false;
      }
    });
  }

  openNewProfileDialog(): void {
    const dialogRef = this.dialog.open(CreateProfileComponent, {
      data:{
        message: `Are you sure want to add a new user?`,
        buttonText: {
          ok: 'Yes',
          cancel: 'Cancel'
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getUsers();
  
    });
  }

  openEditProfileDialog(user: User): void {
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      width: '250px',
  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }

  openDeleteProfileDialog(userId: number, userFirstName: string, userLastName: string){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: `Are you sure want to remove ${userFirstName} ${userLastName} from your household?`,
        buttonText: {
          ok: 'Delete',
          cancel: 'Cancel'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        const a = document.createElement('a');
        a.click();
        a.remove();
        this.onDeleteUser(userId);
        this.snackBar.open(`${userFirstName} ${userLastName} was removed!`, 'Dismiss', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }

  public onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe({
      next: response => {
        this.isLoading = true;
        console.log(response);
        this.getUsers();
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
        this.isLoading = false;
      },
      complete: () => {
        this.displayMessage('User Deleted');
        this.isLoading = false;
      }
    });
  }

  displayMessage(message: string) {

  }

  

}
