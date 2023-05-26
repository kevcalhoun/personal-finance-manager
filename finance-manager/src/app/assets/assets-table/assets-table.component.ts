import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Assets {
  name: string;
  type: string;
  amount: number;
  goal: number;
  goalDeadline: string;
  goalProgress: string;
}

const ELEMENT_DATA: Assets[] = [
  {
    name: 'Roth 401(k)',
    type: 'Retirement',
    amount: 45000,
    goal: 200000,
    goalDeadline: 'January 1, 2027',
    goalProgress: '24%'
  },
  {
    name: 'Roth IRA',
    type: 'Retirement',
    amount: 2500,
    goal: 15000,
    goalDeadline: 'January 1, 2027',
    goalProgress: '10%'
  },
  {
    name: 'IRA Brokerage',
    type: 'Long-term Savings',
    amount: 1500,
    goal: 15000,
    goalDeadline: 'January 1, 2027',
    goalProgress: '15%'
  },
  {
    name: 'Crypto',
    type: 'Long-term Savings',
    amount: 750,
    goal: 5000,
    goalDeadline: 'January 1, 2027',
    goalProgress: '7.5%'
  },
  {
    name: 'Personal Savings',
    type: 'Emergency Savings',
    amount: 2000,
    goal: 5000,
    goalDeadline: 'January 1, 2027',
    goalProgress: '40%'
  }
];

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss']
})
export class AssetsTableComponent implements OnInit, AfterViewInit {
  // Table Properties
  displayedColumns: string[] = [
    'name',
    'type',
    'amount',
    'goal',
    'goalDeadline',
    'goalProgress'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<Assets>();

  constructor() {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {}
}