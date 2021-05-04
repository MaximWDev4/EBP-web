import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {RoutingMap} from '../../_helpers/routing-map';
import {MyRoute} from '../../_helpers/routing-map';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent implements OnInit {
  @Output() IsShownChange = new EventEmitter<string>();
  @Input() sideMenuShown = true;
  isLoggedIn = true;
  currentUser = 'Admin';
  routes: MyRoute[] = [];
  constructor() { }
  ngOnInit(): void {
    Object.entries(RoutingMap).map(
      (value, index, array) => {
        const route: MyRoute = {
          name: value[1].name,
          route: value[1].absoluteRoute,
          checked: false,
          subroutes: []
        };
        this.routes.push(route);
        value[1].subroutes?.map((sr) => {
          this.routes[index].subroutes?.push({name: sr.name, route: sr.absoluteRoute});
        });
      }
    );
  }
  loginout(): void {
  }

  showSideMenu(): void {
    this.IsShownChange.emit();
  }
}
