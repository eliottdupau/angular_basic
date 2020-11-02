import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  onChange() {
    if (this.isChecked) {
      console.log("Off");
      this.isChecked = false;
    } else {
      console.log("On");
      this.isChecked = true;
    }
  
    
  }

}
