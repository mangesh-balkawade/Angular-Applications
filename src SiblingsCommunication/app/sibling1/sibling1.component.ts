import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {

  @Output()
  public myEvent=new EventEmitter();

  public message:string="";

  public sendData(data:any)
  {
    this.myEvent.emit(this.message=data);
  }
}
