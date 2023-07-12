import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mybutton',
  templateUrl: './mybutton.component.html',
  styleUrls: ['./mybutton.component.css']
})
export class MybuttonComponent implements OnInit {
  
    constructor() {
      console.log("CHANDAN");
     }
  
    ngOnInit(): void {
      console.log("CHANDAN");
    } 
}
