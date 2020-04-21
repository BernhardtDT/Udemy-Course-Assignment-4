import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];
  onIntervalStart(intervalStart: number){
    if(intervalStart % 2 === 0){
      this.evenNumbers.push(intervalStart);
    }else
    this.oddNumbers.push(intervalStart)
    console.log(intervalStart);
  }
}
