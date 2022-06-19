import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-batchdetails',
  template: `<h2>Batch Details</h2>
  <ul *ngFor="let i of Batches">
  <li>{{i.Name}} with duration {{i.Duration}} 
  having fees {{i.Fees}}
  </li>
  </ul>
  `
})
export class BatchdetailsComponent implements OnInit 
{

  public Batches:any=[];
  constructor
  (private obj:BatchserviceService)
   { }

  ngOnInit(): void {
    this.Batches=this.obj.getBatches().subscribe
    (
      data=>this.Batches=data
    )
    ;
  }

}
