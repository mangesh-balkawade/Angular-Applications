import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent  {


  public str='';

  public fun()
  {
    console.log('inside event component');
    
  }

  public gun():string
  {
    return this.str="button click"
  }

  public sun(data:any)
  {
    console.log(data);
    
  }
}
