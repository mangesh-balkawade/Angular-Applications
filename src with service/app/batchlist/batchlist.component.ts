import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-batchlist',
  template: `<h2>Batch List</h2>
  <ul *ngFor="let i of Batches">
  <li>{{i.Name}}</li>
  </ul>
  `
})
export class BatchlistComponent implements OnInit {

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
