import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  displayDetails: boolean;
  buttonHistory = [];

  constructor() {
    this.displayDetails = false;
   }

  ngOnInit(): void {
  }

  onDisplayDetails() {
    this.displayDetails === true ? this.displayDetails = false : this.displayDetails = true;
    this.buttonHistory.push(new Date());

  }

  // getBackgroundColor() { return this.clickCount >= 5 ? 'blue' : 'white'; }
}
