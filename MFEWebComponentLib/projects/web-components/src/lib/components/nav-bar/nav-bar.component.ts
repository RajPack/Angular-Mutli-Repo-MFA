import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() navTabs : {label: string, href: string}[] = [];
  @Output() navClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(e: Event, href: string) {
    this.navClick.emit(href);
    e.preventDefault();
  }

}
