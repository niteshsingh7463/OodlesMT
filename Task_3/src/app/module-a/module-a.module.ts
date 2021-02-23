import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';


@NgModule({
  declarations: [CompAComponent, CompBComponent],
  imports: [
    CommonModule,
    ModuleARoutingModule
  ]
})
export class ModuleAModule { }
