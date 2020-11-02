import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-virtualkb',
  templateUrl: './virtualkb.component.html',
  styleUrls: ['./virtualkb.component.css']
})
export class VirtualkbComponent implements OnInit {
  userInput: string = "_";
  inputs = ["_", "_", "_", "_", "_", "_"];
  i: number = 0;
  options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, " ", " ", " ", " ", " ", " "];

  isDisabled: boolean = true;

  constructor() { 
  }

  ngOnInit(): void {
  }

  updateInput(event: any) {
    let value: string = event.target.innerText;
    if (this.i >= 0 && this.i < 6) {
      if (value !== "") {
        this.inputs[this.i] = event.target.innerText;
        console.log(this.inputs[this.i])
        this.i++;
        if (this.i === 6) this.isDisabled = false;
      }
    }
  }

  displayInput() {
    let output: string = "";
    for (let i = 0;  i < this.inputs.length; i++) {
      output += this.inputs[i];
    }
    console.log(output)
  }

}
