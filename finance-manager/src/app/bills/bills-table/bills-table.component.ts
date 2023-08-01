import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Bill } from '../models/bill';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BillService } from '../bills.service';
import { MatSort } from '@angular/material/sort';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { CreateBillComponent } from '../create-bill/create-bill.component';

@Component({
  selector: 'app-bills-table',
  templateUrl: './bills-table.component.html',
  styleUrls: ['./bills-table.component.scss']
})
export class BillsTableComponent implements OnInit, AfterViewInit {
  // Table Properties
  public bills: Bill[] = [];
  public editBill!: Bill;
  public deleteBill!: Bill;
  displayedColumns: string[] = [
    'bill-description',
    'bill-amount',
    'bill-frequency',
    'bill-payment-due-date',
    'bill-company',
    'bill-payment-portal-url',
    'bill-auto-pay',
    'actions'
  ];
  dataSource = new MatTableDataSource(this.bills);
  clickedRows = new Set<Bill[]>();
  isLoading = false;

  // Snackbar message properties
  durationInSeconds = 3;

  constructor(private billService: BillService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.getBills();
  }

  displayMessage(message: string) {

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
        console.log(this.bills);
      }
    });
  }

  openNewBillDialog(): void {
    const createFormData = this.dialog.open(CreateBillComponent, {
      data:{
        message: `Are you sure want to add a new bill?`,
        buttonText: {
          ok: 'Yes',
          cancel: 'Cancel'
        }
      }
    });
    createFormData.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getBills();
      this.snackBar.open('New Bill Created!', 'Dismiss', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    });
  }

  openDeleteBillDialog(billId: number, billDescription: string, ) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: `Are you sure want to delete bill ${billDescription}?`,
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
        this.onDeleteBill(billId);
        this.snackBar.open('Bill Deleted', 'Dismiss', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }

  openEditBillDialog(row: Bill) {

  }
  


  public onDeleteBill(billId: number): void {
    this.billService.deleteBill(billId).subscribe({
      next: response => {
        this.isLoading = true;
        console.log(response);
        this.getBills();
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
        this.isLoading = false;
      },
      complete: () => {
        this.displayMessage('Bill Deleted');
        this.isLoading = false;
      }
    });
  }

  public onOpenEditBillDialog(bill: Bill) {
    // let dialogRef = this.dialog.open(CreateAssetComponent, {
    //   width: '250px',
    //   // data: { assetName: this.assetName }
    //   });

  }

}
