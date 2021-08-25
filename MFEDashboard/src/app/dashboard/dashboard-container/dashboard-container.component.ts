import { Component,  OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShellBrokerService } from 'shell-broker';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  constructor( private shellBroker: ShellBrokerService) { }
  userName = '';
  userNameSubscription: Subscription | undefined;
  ngOnInit(): void {
    this.userNameSubscription = this.shellBroker.get('userName').subscribe(name => {
      this.userName = name;
    })
  }

  ngOnDestroy() {
    this.userNameSubscription?.unsubscribe();
  }

}
