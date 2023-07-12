import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit{

  // number: number = 0;
  constructor() {
   }

  ngOnInit(): void {
    this.generateRandomNumber();
  }

  title = 'my-project';
  number: number = 40;
  

  generateRandomNumber() {
    this.number = Math.floor(Math.random() * 100);
  }

  onClickIncrement() {
    this.number = parseInt(`${this.number}`) + 1;
  }

  onClickDecrement() {
    this.number = parseInt(`${this.number}`) - 1;
  }


  onValueChange(event: any) {
    if (event.target.value == '' || event.target.value == null) {
      console.log("ERROR");
    }
    this.number = event.target.value;
  }



}
