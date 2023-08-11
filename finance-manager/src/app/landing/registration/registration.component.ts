import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Household } from '../models/household';
import { User } from 'src/app/profiles/models/user';
import { RegistrationService } from '../services/registration.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
    household!: Household;
    member!: User;
    householdSetupForm!: FormGroup;
    memberSetupForm!: FormGroup;

  // householdSetupFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });

  constructor(private _formBuilder: FormBuilder,
    private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.householdSetupForm = new FormGroup({
      householdName: new FormControl(null),
      householdUsername: new FormControl(null),
      householdPassword: new FormControl(null),
    });

    this.memberSetupForm = new FormGroup({
      userFirstName: new FormControl(null),
      // userLastName: new FormControl(null),
    });
  }

 

  public onSubmitRegistration(householdFormData: Household, memberFormData: User){
    console.log(householdFormData, memberFormData);
    this.registrationService.createHousehold(householdFormData).subscribe({
      next: (response: Household) => {
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.householdSetupForm.reset()
      }, 
      complete: () => {
        this.householdSetupForm.reset();
      }
    })

  }

}
