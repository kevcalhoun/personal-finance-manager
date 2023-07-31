import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Bill } from '../models/bill';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BillService } from '../bills.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.scss']
})
export class CreateBillComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  bills: Bill[] = [];
  bill!: Bill;
  createBillForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateBillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bill,
    private formBuilder: FormBuilder,
    private billService: BillService,
    private _snackBar: MatSnackBar) { }

  
    ngOnInit(): void {
      this.createBillForm = new FormGroup({
        billDescription: new FormControl(null),
        billAmount: new FormControl(null),
        billFrequency: new FormControl(null),
        billPaymentDueDate: new FormControl(null),
        billCompany: new FormControl(null),
        billPaymentPortalUrl: new FormControl(null),
        billAutoPay: new FormControl(null),
      });
    }

    public onCreateBill(formData: Bill): void {
      const createFormData: Bill = this.createBillForm.value;
      console.log(formData);
      this.billService.createBill(formData).subscribe({
        next: (response: Bill) => {
          console.log(response);
          this.getBills();
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
          this.createBillForm.reset()
        }, 
        complete: () => {
          console.log(this.bills);
          this.createBillForm.reset();
        }
      });
    }
  
  
    public getBills(): void {
      this.bills = [];
      this.billService.getBills().subscribe({
        next: data => {
          this.bills = data;
        }, 
        error: (err: HttpErrorResponse) => {
          alert(err.message);
        },
        complete: () => {
          console.log("all bills loaded after created new")
        }
      });
    }

}
