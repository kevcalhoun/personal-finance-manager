
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAssetComponent } from './create-asset/create-asset.component';



@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  title = "Assets";
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  openNewAssetDialog(): void {
    const dialogRef = this.dialog.open(CreateAssetComponent, {
      width: '600px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}