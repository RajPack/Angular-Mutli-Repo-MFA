import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ShellBrokerService } from 'shell-broker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [
    {provide: ShellBrokerService, useValue: {get: () => of(), set: () => {}}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
