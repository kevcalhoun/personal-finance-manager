import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface Budgets {
  description: string;
  category: string;
  paymentSource: string;
  amount: number;
  status: string;
}

const ELEMENT_DATA: Budgets[] = [
  {description: 'Personal Emergency Savings', category: 'Personal Savings', paymentSource: 'Checking Account', amount: 100, status: 'progress bar here'},
  {description: 'Vehicle Loan Payment', category: 'Debt', paymentSource: 'Checking Account', amount: 600, status: 'progress bar here'},
  {description: 'Crypto/Coinbase', category: 'Investment', paymentSource: 'Checking Account', amount: 25, status: 'progress bar here'},
  {description: 'Groceries', category: 'Joint Spending', paymentSource: 'Checking Account', amount: 150, status: 'progress bar here'},
  {description: 'Going out/Drinks/Vacation', category: 'Joint Spending', paymentSource: 'Checking Account', amount: 150, status: 'progress bar here'},
  {description: 'Rent', category: 'Joint Spending', paymentSource: 'Checking Account', amount: 925, status: 'progress bar here'},
  {description: 'Credit Card Payment', category: 'Debt', paymentSource: 'Checking Account', amount: 250, status: 'progress bar here'},
];

@Component({
  selector: 'app-budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.scss']
})
export class BudgetTableComponent implements OnInit, AfterViewInit {
  // Table Properties
  displayedColumns: string[] = ['description', 'category', 'paymentSource', 'amount', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<Budgets>();

  constructor() { }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

}
