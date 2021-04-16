import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {RoutingMap} from '../../_helpers/routing-map';

export type MyRoute = {
  name: string,
  route: string,
  checked?: boolean,
  subroutes?: MyRoute[],
};

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent implements OnInit {
  @Input() isShown = false;
  @Input() isHome = true;
  @Output() IsShownChange = new EventEmitter();
  routes: MyRoute[] = [];
  currentRoute: any;
  constructor(
  ) {}

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
    // console.log(currentSubroutes);
    // this.routes = [
    //     {
    //       name: 'Типы знаков',
    //       route: '/codifier/sign-types'
    //     },
    //     {
    //       name: 'Номенклатура ДЗ',
    //       route: './nomenclature'
    //     },
    //     {
    //       name: 'Тип дорзнака',
    //       route: './znak-type'
    //     },
    //     {
    //       name: 'Тип пленки',
    //       route: './shell-type'
    //     },
    //     {
    //       name: 'Материал основы',
    //       route: './material'
    //     },
    //     {
    //       name: 'Способ изготовления',
    //       route: './preparation'
    //     },
    //     {
    //       name: 'Тип конфигурации',
    //       route: './config'
    //     },
    //     {
    //       name: 'Изготовитель',
    //       route: './mfr' // manufacturer
    //     },
    //     {
    //       name: 'Направление',
    //       route: './direction'
    //     },
    //     {
    //       name: 'Срок действия',
    //       route: './expiration'
    //     }
    //   ];
  }

  closeMe(): void {
    this.IsShownChange.emit();
  }
}
