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
  currentUser = 'Admin';
  routes = [
    {
      name: 'Главнвя',
      route: '/home',
      checked: false,
    },
    {
      name: 'Кодификатор',
      route: '/codifier',
      checked: false,
      subroutes: [
        {
          name: 'Типы знаков',
          route: '/codifier/sign-types'
        },
        {
          name: 'Номенклатура ДЗ',
          route: '/codifier/nomenclature'
        },
        {
          name: 'Тип дорзнака',
          route: '/codifier/znak-type'
        },
        {
          name: 'Тип пленки',
          route: '/codifier/shell-type'
        },
        {
          name: 'Материал основы',
          route: '/codifier/material'
        },
        {
          name: 'Способ изготовления',
          route: '/codifier/preparation'
        },
        {
          name: 'Тип конфигурации',
          route: '/codifier/config'
        },
        {
          name: 'Изготовитель',
          route: '/codifier/mfr' // manufacturer
        },
        {
          name: 'Направление',
          route: '/codifier/direction'
        },
        {
          name: 'Срок действия',
          route: '/codifier/expiration'
        }
      ]
    },
    {
      name: 'Паспорта',
      route: '/identifiers',
      checked: false,
    },
    {
      name: 'Роли',
      route: '/roles/',
      checked: false,
    },
    {
      name: 'Отчеты',
      route: '/reports',
      checked: false,
    },
    {
      name: 'Слои',
      route: '/layers',
      checked: false,
    },
  ];
  constructor() { }
  ngOnInit(): void {
  }
  loginout(): void {
  }

  showSideMenu(): void {
    this.IsShownChange.emit();
  }
}
