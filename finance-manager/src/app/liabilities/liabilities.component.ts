import { Component, OnInit } from '@angular/core';
import { Liability } from './models/liabilty';

@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.component.html',
  styleUrls: ['./liabilities.component.scss']
})
export class LiabilitiesComponent implements OnInit {
  title = "Liabilites";
  liabilities: Liability[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}