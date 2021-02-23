import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameAComponent } from './name-a/name-a.component';
import { NameBComponent } from './name-b/name-b.component';

@NgModule({
  declarations: [
    AppComponent,
    NameAComponent,
    NameBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
