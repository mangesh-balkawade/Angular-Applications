import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mangesh';
  name='Mangesh Balkawade';
  age=22;
  arr:number[]=[1,2,3,4,5]
  temp:number=0;
  flag:boolean=false;

  cel(no:any)
  {
    this.flag=true;
    this.temp=no;
  }
}
