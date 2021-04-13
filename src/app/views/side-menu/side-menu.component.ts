import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';

type MyRoute = {
  name: string,
  route: string
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
  currentRoute = '';
  constructor(
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe(params => {
      // this.currentRoute = params.keys();
    console.log(this.route.snapshot.pathFromRoot);
    });
  }

  ngOnInit(): void {
    if (this.isHome) {
      this.routes = [
        {
          name: 'Типы знаков',
          route: '/codifier'
        },
        {
          name: 'Паспорта',
          route: '/identifiers'
        },
        {
          name: 'Роли',
          route: '/roles'
        },
        {
          name: 'Отчеты',
          route: '/reports'
        },
        {
          name: 'Слои',
          route: '/layers'
        },
      ];
    } else {
      this.routes = [
        {
          name: 'Типы знаков',
          route: './sign-types'
        },
        {
          name: 'Номенклатура ДЗ',
          route: './nomenclature'
        },
        {
          name: 'Тип дорзнака',
          route: './znak-type'
        },
        {
          name: 'Тип пленки',
          route: './shell-type'
        },
        {
          name: 'Материал основы',
          route: './material'
        },
        {
          name: 'Способ изготовления',
          route: './preparation'
        },
        {
          name: 'Тип конфигурации',
          route: './config'
        },
        {
          name: 'Изготовитель',
          route: './mfr' // manufacturer
        },
        {
          name: 'Направление',
          route: './direction'
        },
        {
          name: 'Срок действия',
          route: './expiration'
        }
      ];
    }
  }

  closeMe(): void {
    this.IsShownChange.emit();
  }
}
