import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirwithbind',
  templateUrl: './dirwithbind.component.html',
  styleUrls: ['./dirwithbind.component.css']
})
export class DirwithbindComponent  {

  type:any;
  flag='';

 public veg:string[]=["muttor-panner","panner tikka","veg-kolhapuri","veg biryani"]
 public nonveg:string[]=["chicken biryani","mutton biryani","chicken hundi","mutton hundi"]

 public displayMenu(data:any)
 {
     this.flag=data;
 }


}
