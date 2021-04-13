import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent implements OnInit {
  @Output() IsShownChange = new EventEmitter<string>();
  @Input() sideMenuShown = true;
  isLoggedIn = true;
  hasProfile = true;
  currentUser = 'Admin';
  constructor() { }
  ngOnInit(): void {
  }
  loginout(): void {
  }

  showSideMenu(): void {
    this.IsShownChange.emit();
  }
}
