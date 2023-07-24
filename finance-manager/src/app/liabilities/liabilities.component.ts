import { Component, OnInit } from '@angular/core';
import { Liability } from './models/liabilty';
import { LiabilityService } from './liabilities.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.component.html',
  styleUrls: ['./liabilities.component.scss']
})
export class LiabilitiesComponent implements OnInit {
  title = "Liabilites";
  liabilities: Liability[] = [];
  totalDebtAmount!: string;

  constructor(private liabilityService: LiabilityService) { }

  ngOnInit(): void {
    this.getTotalDebtAmount();
  }

  getTotalDebtAmount(): void {
    this.liabilities= [];
    this.liabilityService.getLiabilities().subscribe({
      next: data => {
        data.forEach(element => {
          this.liabilities.push(element);
          console.log(element)
        });
        const currentDebtsTotal: number = this.liabilities.map(a => a.liabilityRemainingAmount).reduce(function(a, b) {
          return a + b;
        });
        this.totalDebtAmount = currentDebtsTotal.toString().padStart(0, '$');
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      },
      complete: () => {

      }
    })
  }

}