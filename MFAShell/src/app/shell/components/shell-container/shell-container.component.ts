import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShellBrokerService } from 'shell-broker';

@Component({
  selector: 'app-shell-container',
  templateUrl: './shell-container.component.html',
  styleUrls: ['./shell-container.component.scss']
})
export class ShellContainerComponent implements OnInit {
  tabs = [
    {label: 'Dashboard', href: './dashboard'},
    {label: 'Profile', href: './profile'},
  ]
  constructor(public router: Router, public activatedRoute: ActivatedRoute, private shellBroker: ShellBrokerService) { }
  userName = 'Admin';
  ngOnInit(): void {
    this.shellBroker.set("userName", this.userName);
  }

  onUserNameChange(value: string) {
    this.shellBroker.set('userName', value);
  }

}
