import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'ca-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponet implements OnInit {
  @Output() rated = new EventEmitter<number>();
  @Input() rate: number = 0;

  rates: number[] = [1,2,3,4,5];

  previousRate: number;

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number){
    this.rate = r;
    this.previousRate = undefined
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r: number){
    if(this.previousRate === undefined){
      this.previousRate = this.rate
    }
    this.rate = r
  }

  clearTemporaryRate(r: number){
    if(this.previousRate !== undefined){
      this.rate = this.previousRate
      this.previousRate = undefined
    }
  }
}
