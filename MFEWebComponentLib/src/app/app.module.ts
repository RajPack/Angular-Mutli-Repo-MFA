import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebComponentsModule } from 'web-components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    WebComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
