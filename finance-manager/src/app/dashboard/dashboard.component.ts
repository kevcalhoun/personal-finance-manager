import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Asset } from '../assets/models/asset';
import { DashboardService } from './dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AssetService } from '../assets/assets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = "Dashboard";
  
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  assets: Asset[] = [];
  totalAssetAmount!: number;
  goalProgressAverage!: number;
  
  constructor(private _formBuilder: FormBuilder,
    private assetService: AssetService) { }

  ngOnInit() {
    this.getAssetDetails();
  }

  getAssetDetails(): void {
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

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

}
