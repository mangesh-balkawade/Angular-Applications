import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

@Output() public myEvent=new EventEmitter();

  public Message:string="hello from child ";

  public sendMessage():any
  {
    return this.myEvent.emit(this.Message);
  }

  
}
