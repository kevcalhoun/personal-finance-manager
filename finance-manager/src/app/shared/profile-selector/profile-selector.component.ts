import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { User } from 'src/app/profiles/models/user';
import { UserService } from 'src/app/profiles/user.service';

@Component({
  selector: 'app-profile-selector',
  templateUrl: './profile-selector.component.html',
  styleUrls: ['./profile-selector.component.scss']
})
export class ProfileSelectorComponent implements OnInit {
   // expansion panel
   panelOpenState = false;

   isLoading = false;
   public profiles: User[] = [];
   public profile!: User;
   
   // profile dropdown form
   hideRequiredControl = new FormControl(false);
   floatLabelControl = new FormControl('auto' as FloatLabelType);
   options = this._formBuilder.group({
     hideRequired: this.hideRequiredControl,
     floatLabel: this.floatLabelControl,
   });

  constructor(private _formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
    this.loadProfiles();
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  public loadProfiles(): void {
    this.isLoading = true;
    this.profiles = [];
    this.userService.getUsers().subscribe({
      next: data => {
        this.profiles = data;
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
        this.isLoading = false;
      },
      complete: () => {
        console.log(this.profiles);
        this.isLoading = false;
      }
    })
  }

  public onSwitchProfile() {
    this.panelOpenState = false;

  }
}