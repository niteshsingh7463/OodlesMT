import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'moduleA',
    loadChildren:() => import('./module-a/module-a.module').then(m => m.ModuleAModule)
  },
  {
    path:'moduleB',
    loadChildren:() => import('./module-b/module-b.module').then(m => m.ModuleBModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
