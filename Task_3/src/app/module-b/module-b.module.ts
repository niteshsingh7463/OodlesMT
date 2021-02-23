import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBRoutingModule } from './module-b-routing.module';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';


@NgModule({
  declarations: [CompAComponent, CompBComponent],
  imports: [
    CommonModule,
    ModuleBRoutingModule
  ]
})
export class ModuleBModule { }
