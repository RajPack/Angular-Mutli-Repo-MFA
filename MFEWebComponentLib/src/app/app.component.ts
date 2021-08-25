import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  tabs = [
    {label: 'Dashboard', href: 'dashboard'},
    {label: 'Profile', href: 'profile'},
  ]
}
