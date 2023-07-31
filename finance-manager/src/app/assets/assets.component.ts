
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { AssetService } from './assets.service';
import { Asset } from './models/asset';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  title = "Assets";
  animal: string;
  name: string;
  assets: Asset[] = [];
  asset: Asset;
  totalAssetAmount!: number;
  goalProgressAverage!: number;

  constructor(public dialog: MatDialog,
    private assetService: AssetService) { }

  ngOnInit(): void {
    this.getTotalAssetAmount();
  }

  getTotalAssetAmount(): void {
      this.assets = [];
      this.assetService.getAssets().subscribe({
        next: data => {
          data.forEach(element => {
            this.assets.push(element);
          });
          console.log(this.assets);
          
          const currentAssetsTotal: number = this.assets.map(a => a.assetAmount).reduce(function(a, b) {
            return a + b;
          });
          const currentGoalProgressAvg: number = this.assets.reduce((total, next) => total + next.assetGoalProgress, 0) / this.assets.length;
          this.totalAssetAmount = currentAssetsTotal;
          this.goalProgressAverage = currentGoalProgressAvg;
          console.log(this.totalAssetAmount);
        }, 
        error: (err: HttpErrorResponse) => {
          alert(err.message);
        },
        complete: () => {
        }
      });
  }


  // openNewAssetDialog(): void {
  //   const createFormData = this.dialog.open(CreateAssetComponent, {
  //     width: '600px'
  //     //  data: {name: this.asset.assetName, animal: this.animal},
  //   });
    

  //   createFormData.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //     this.snackBar.open('New Asset Created!', 'Dismiss', {
  //       duration: 2000,
  //       horizontalPosition: 'right',
  //       verticalPosition: 'top'
  //     });
  //   });
  // }



  // displayMessage(message: string) {

  // }
}