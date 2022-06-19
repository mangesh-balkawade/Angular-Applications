import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BatchesComponent } from './batches/batches.component';
import { InvalidComponent } from './invalid/invalid.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {path :'aboutus',component:AboutusComponent},
  {path :'batches',component:BatchesComponent},
  {path :'subject',component:SubjectComponent},
  {path :'',component:AboutusComponent},
  {path: '**',component:InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
