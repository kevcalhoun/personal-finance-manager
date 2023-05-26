import { Component, OnInit } from '@angular/core';

import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEditProfileDialog(): void {
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openNewProfileDialog(): void {
    const dialogRef = this.dialog.open(CreateProfileComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
