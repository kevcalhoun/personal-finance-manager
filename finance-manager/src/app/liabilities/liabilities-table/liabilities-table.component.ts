import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Liabilities {
  debt: string;
  amount: number;
  minMonthlyPayment: number;
  interestRate: number;
  estPayoffDate: string;
}

const ELEMENT_DATA: Liabilities[] = [
  {debt: 'Vehicle Loan - Truck', amount: 30000, minMonthlyPayment: 597, interestRate: 4.5, estPayoffDate: '1/1/2027'},
  {debt: 'Vehicle Loan - 4Runner', amount: 20000, minMonthlyPayment: 485, interestRate: 4.0, estPayoffDate: '1/1/2027'},
  {debt: 'Credit Card', amount: 450, minMonthlyPayment: 25,  interestRate: 17.8, estPayoffDate: '10/1/2022'},
  {debt: 'Student Loan', amount: 11100, minMonthlyPayment: 285, interestRate: 4.15, estPayoffDate: '1/1/2027'}
];

@Component({
  selector: 'app-liabilities-table',
  templateUrl: './liabilities-table.component.html',
  styleUrls: ['./liabilities-table.component.scss']
})
export class LiabilitiesTableComponent implements OnInit, AfterViewInit {

  // Table Properties
  displayedColumns: string[] = ['debt', 'amount', 'minMonthlyPayment', 'interestRate', 'estPayoffDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<Liabilities>();

  constructor() { }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

}
