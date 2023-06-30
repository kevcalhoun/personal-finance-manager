import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Asset } from '../models/asset';
import { AssetService } from '../assets.service';
import { HttpErrorResponse } from '@angular/common/http';


export interface DialogData {
  assetName: string;
  assetType: string;
  assetAmount: number;
  assetGoalAmount: number;
  assetGoalDeadline: string;
}



@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.scss']
})
export class CreateAssetComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  assets: Asset[] = [];
  asset!: Asset;
  createAssetForm!: FormGroup;

 
  constructor(public dialogRef: MatDialogRef<CreateAssetComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Asset,
              private formBuilder: FormBuilder,
              private assetService: AssetService,
              private _snackBar: MatSnackBar) { 
                // this.createAssetForm = this.formBuilder.group({
                //   assetName: [data.assetName || '', Validators.required],
                //   assetType: [data.assetType || '', Validators.required],
                //   assetAmount: [data.assetAmount || '', Validators.required],
                //   assetGoalAmount: [data.assetGoalAmount] || '',
                //   assetGoalDeadline: [data.assetGoalDeadline || '']
                // });
              }

  ngOnInit(): void {

    this.createAssetForm = new FormGroup({
      assetName: new FormControl(null),
      assetType: new FormControl(null),
      assetAmount: new FormControl(null),
      assetGoalAmount: new FormControl(null),
      assetGoalDeadline: new FormControl(null),
    })
    this.initForm();
  }

  private initForm() {
    //  this.asset.assetName = '';
    // let assetType = '';
    // let assetAmount = 0;
    // let assetGoalAmount = 0;
    // let assetGoalDeadline = '';


 
  }


  public onCreateAsset(formData: Asset): void {
    const createFormData: Asset = this.createAssetForm.value;
    console.log(formData);
    this.assetService.createAsset(formData).subscribe({
      next: (response: Asset) => {
        console.log(response);
        this.getAssets();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.createAssetForm.reset()
      }, 
      complete: () => {
        console.log(this.assets);
        this.createAssetForm.reset();
      }
    });
  }


  public getAssets(): void {
    this.assets = [];
    this.assetService.getAssets().subscribe({
      next: data => {
        this.assets = data;
      }, 
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
      complete: () => {
        console.log("all assets loaded after created new")
      }
    });
  }




}