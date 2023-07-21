import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Liability } from '../models/liabilty';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LiabilityService } from '../liabilities.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-liability',
  templateUrl: './create-liability.component.html',
  styleUrls: ['./create-liability.component.scss']
})
export class CreateLiabilityComponent implements OnInit {
  liabilities: Liability[] = [];
  liability!: Liability;
  createLiabilityForm!: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public dialogRef: MatDialogRef<CreateLiabilityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Liability,
    private liabilityService: LiabilityService) {

  }

  ngOnInit(): void {
    this.createLiabilityForm = new FormGroup({
      liabilityName: new FormControl(null),
      liabilityType: new FormControl(null),
      liabilityRemainingAmount: new FormControl(null),
      liabilityInterestRate: new FormControl(null),
      liabilityMinMonthlyPayment: new FormControl(null)
    })
  }

  public onCreateLiability(formData: Liability): void {
    // const createFormData: Liability = this.createLiabilityForm.value;
    console.log(formData);
    this.liabilityService.createLiability(formData).subscribe({
      next: (response: Liability) => {
        console.log(response);
        this.getLiabilities();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.createLiabilityForm.reset()
      }, 
      complete: () => {
        console.log(this.liabilities);
        this.createLiabilityForm.reset();
      }
    });
  }

  public getLiabilities(): void {
    this.liabilities = [];
    this.liabilityService.getLiabilities().subscribe({
      next: data => {
        this.liabilities = data;
      }, 
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
      complete: () => {
        console.log("all liabilities loaded after created new")
      }
    });
  }

}
