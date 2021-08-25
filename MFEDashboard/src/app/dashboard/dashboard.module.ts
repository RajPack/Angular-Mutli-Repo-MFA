import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardDetailComponent } from './dashboard-container/dashboard-detail/dashboard-detail.component';

@NgModule({
  declarations: [
    DashboardContainerComponent,
    DashboardDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
