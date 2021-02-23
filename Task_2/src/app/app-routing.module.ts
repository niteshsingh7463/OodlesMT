import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteComponentAComponent } from './route-component-a/route-component-a.component';
import { RouteComponentBComponent } from './route-component-b/route-component-b.component';

const routes: Routes = [
  {path:'routeCompA',
component:RouteComponentAComponent
},
{path:'routeCompB',
component:RouteComponentBComponent
},
{path:'**',
redirectTo:'routeCompA'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
