import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  onButtonClickListner(name: string){
    console.log(name);
  }

  inputOnChangeListner(event: any){
    console.log(event.target.value);
  }

}
