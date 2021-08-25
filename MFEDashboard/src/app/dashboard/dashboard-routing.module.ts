import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardDetailComponent } from './dashboard-container/dashboard-detail/dashboard-detail.component';

const routes: Routes = [
  {path: '', component: DashboardContainerComponent, children: [
    {path: 'subRoute', component: DashboardDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
