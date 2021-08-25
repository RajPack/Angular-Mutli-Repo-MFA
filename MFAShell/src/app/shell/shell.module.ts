import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellContainerComponent } from './components/shell-container/shell-container.component';
import { WebComponentsModule } from 'web-components';
import { ShellBrokerService } from 'shell-broker';


@NgModule({
  declarations: [
    ShellContainerComponent
  ],
  providers: [
    {provide: ShellBrokerService, useClass: ShellBrokerService}
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    WebComponentsModule
  ]
})
export class ShellModule { }
