import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-flock',
  templateUrl: './flock.component.html',
  styleUrls: ['./flock.component.css']
})
export class FlockComponent implements OnInit {
  isHidden: boolean = true;
  players: string[];

  @Output() changeState: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFlock() {
    this.isHidden = false;
    this.changeState.emit();
  }

  onUnFlock() {
    this.isHidden = true;
  }

}
