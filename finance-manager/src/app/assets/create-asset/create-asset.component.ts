import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.scss']
})
export class CreateAssetComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  createAssetForm = this._formBuilder.group({

  });

  constructor(public dialogRef: MatDialogRef<CreateAssetComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private _formBuilder: FormBuilder,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  // Create a Sharable service for this called message service
  openSnackBar(message: string, action: string) {
    this._snackBar.open(
      message, 
      action, 
      {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000
      }
    );
   
  }

}