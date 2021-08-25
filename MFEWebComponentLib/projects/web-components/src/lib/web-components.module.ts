import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class WebComponentsModule { }
