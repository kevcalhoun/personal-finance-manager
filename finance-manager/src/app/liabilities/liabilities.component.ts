import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.component.html',
  styleUrls: ['./liabilities.component.scss']
})
export class LiabilitiesComponent implements OnInit {
  title = "Liabilites";
  constructor() { }

  ngOnInit(): void {
  }

}