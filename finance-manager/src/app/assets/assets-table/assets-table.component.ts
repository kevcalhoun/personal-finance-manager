import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssetService } from '../assets.service';
import { Asset } from '../models/asset';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateAssetComponent } from '../create-asset/create-asset.component';
import {ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';


export interface DialogData {
  assetName: string;
  assetType: string;
  assetAmount: number;
  assetGoalAmount: number;
  assetGoalDeadline: string;
}

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss']
})
export class AssetsTableComponent implements OnInit, AfterViewInit {
 // Table Properties
  public assets: Asset[] = [];
  public editAsset: Asset;
  public deleteAsset: Asset;
  displayedColumns: string[] = [
    'assetName',
    'assetType',
    'assetAmount',
    'assetGoalAmount',
    'assetGoalDeadline',
    'assetGoalProgress',
    'actions'
  ];
  dataSource = new MatTableDataSource(this.assets);
  clickedRows = new Set<Asset[]>();
  isLoading = false;

  // Snackbar message properties
  durationInSeconds = 3;

  constructor(private assetService: AssetService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {}


  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.getAssets();
  }

  displayMessage(message: string) {

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
        console.log(this.assets);
      }
    });
  }

  public getAssetGoalProgress(assetAmount: number, assetGoalAmount: number) {
    const progressPercentage = Math.round((assetAmount/assetGoalAmount) * 100);
    return progressPercentage.toString() + '%';
  }

  openNewAssetDialog(): void {
    const createFormData = this.dialog.open(CreateAssetComponent, {
      data:{
        message: `Are you sure want to add a new asset?`,
        buttonText: {
          ok: 'Yes',
          cancel: 'Cancel'
        }
      }
    });
    createFormData.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAssets();
      this.snackBar.open('New Asset Created!', 'Dismiss', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    });
  }

  openDeleteAssetDialog(assetId: number, assetName: string, ) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: `Are you sure want to delete asset ${assetName}?`,
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
        this.onDeleteAsset(assetId);
        this.snackBar.open('Asset Deleted', 'Dismiss', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }




  openEditAssetDialog(row: Asset) {

  }
  


  public onDeleteAsset(assetId: number): void {
    this.assetService.deleteAsset(assetId).subscribe({
      next: response => {
        this.isLoading = true;
        console.log(response);
        this.getAssets();
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
        this.isLoading = false;
      },
      complete: () => {
        this.displayMessage('Asset Deleted');
        this.isLoading = false;
      }
    });
  }

  public onOpenEditAssetDialog(asset: Asset) {
    let dialogRef = this.dialog.open(CreateAssetComponent, {
      width: '250px',
      // data: { assetName: this.assetName }
      });

  }
}