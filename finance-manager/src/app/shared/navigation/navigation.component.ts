import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  //for mobile navigation menu responsiveness
  collapsed = true;

  constructor() { }

  ngOnInit(): void {}

}
