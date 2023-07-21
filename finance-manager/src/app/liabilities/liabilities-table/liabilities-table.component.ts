import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Liability } from '../models/liabilty';
import { LiabilityService } from '../liabilities.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { CreateLiabilityComponent } from '../create-liability/create-liability.component';



@Component({
  selector: 'app-liabilities-table',
  templateUrl: './liabilities-table.component.html',
  styleUrls: ['./liabilities-table.component.scss']
})
export class LiabilitiesTableComponent implements OnInit, AfterViewInit {

  // Table Properties
  public liabilities: Liability[] = [];
  public liability!: Liability;
  displayedColumns: string[] = [
    'liabilityName', 
    'liabilityType', 
    'liabilityRemainingAmount', 
    'liabilityInterestRate', 
    'liabilityMinMonthlyPayment',
    'liabilityEstimatedPayoffDate',
    'actions'
  ];
  dataSource = new MatTableDataSource(this.liabilities);
  clickedRows = new Set<Liability[]>();
  isLoading = false;

  // Snackbar message properties
  durationInSeconds = 3;


  constructor(private liabilityService: LiabilityService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getLiabilities();
  }

  public getLiabilities(): void {
    this.isLoading = true;
    this.liabilities = [];
    this.liabilityService.getLiabilities().subscribe({
      next: data => {
        this.liabilities = data;
      }, 
      error: (err: HttpErrorResponse) => {
        alert(err.message);
        this.isLoading = false;
      },
      complete: () => {
        console.log(this.liabilities);
        this.isLoading = false;
      }
    });
  }

  public openNewLiabilityDialog(): void {
    const createFormData = this.dialog.open(CreateLiabilityComponent, {
      data:{
        message: `Are you sure want to add a new liability?`,
        buttonText: {
          ok: 'Yes',
          cancel: 'Cancel'
        }
      }
    });
    createFormData.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getLiabilities();
      this.snackBar.open('New Liability Created!', 'Dismiss', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    });
  }

  public openDeleteLiabilityDialog(liabilityId: number, liabilityName: string, ) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: `Are you sure want to delete liability ${liabilityName}?`,
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
        this.onDeleteLiability(liabilityId);
        this.snackBar.open('Liability Deleted', 'Dismiss', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }

  public onDeleteLiability(liabilityId: number): void {
    this.liabilityService.deleteLiability(liabilityId).subscribe({
      next: response => {
        this.isLoading = true;
        console.log(response);
        this.getLiabilities();
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

  public onOpenEditLiabilityDialog(liability: Liability) {
    let dialogRef = this.dialog.open(CreateLiabilityComponent, {
      width: '250px',
      // data: { assetName: this.assetName }
      });
  }

  displayMessage(message: string) {

  }


}
