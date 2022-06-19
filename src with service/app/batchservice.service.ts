import { Injectable } from '@angular/core';
import { IBathes } from './batches';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BatchserviceService
 {

  constructor(private obj:HttpClient) 
  { }

  private url="./assets/Data/Batches.json";

  public getBatches():Observable<IBathes[]>
  {
    return this.obj.get<IBathes[]>(this.url);
  }

}
