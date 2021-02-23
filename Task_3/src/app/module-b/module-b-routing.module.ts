import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'compA',
        component:CompAComponent
      },
      {
        path:'compB',
        component:CompBComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleBRoutingModule { }
