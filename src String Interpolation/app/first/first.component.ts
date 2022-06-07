import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})

export class FirstComponent  {

  name:string='Mangesh';

 display():string
 {
    return "Hello "+this.name;
 }

 Addition(no1:number,no2:number):number
 {
   return no1+no2;
 }
  

}
