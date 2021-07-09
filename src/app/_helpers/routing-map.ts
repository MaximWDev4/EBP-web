import {LoadChildrenCallback} from '@angular/router';

export type RouteMap = {
  name: string,
  absoluteRoute: string,
  routeName: string,
  child?: LoadChildrenCallback,
  checked?: boolean,
  image?: string,
  subroutes?: RouteMap[]
};

type RoutingMap = {
  home: RouteMap,
  codifier: RouteMap,
  identifiers: RouteMap,
  roles: RouteMap,
  reports: RouteMap,
  layers: RouteMap,
};

export type MyRoute = {
  name: string,
  route: string,
  checked?: boolean,
  subroutes?: MyRoute[],
};

export const RoutingMap: RoutingMap = {
  home: {
    name: 'Карта',
    routeName: 'home',
    absoluteRoute: '/home/656543.76337457/4791124.0180348/5',
    child: () => import('../views/home/home.module').then(m => m.HomeModule),
    checked: false,
  },
  codifier: {
    name: 'Кодификатор',
    routeName: 'codifier',
    absoluteRoute: '/codifier',
    child: () => import('../views/codifier/codifier.module').then(m => m.CodifierModule),
    checked: false,
    subroutes: [
      {
        name: 'Типы знаков',
        routeName: 'sign-types',
        image: '',
        absoluteRoute: '/codifier/sign-types',
      },
      {
        name: 'Номенклатура ДЗ',
        routeName: 'nomenclature',
        absoluteRoute: '/codifier/nomenclature',
      },
      {
        name: 'Тип дорзнака',
        routeName: 'znak-type',
        absoluteRoute: '/codifier/znak-type',
      },
      {
        name: 'Тип пленки',
        routeName: 'skin',
        absoluteRoute: '/codifier/skin',
      },
      {
        name: 'Материал основы',
        routeName: 'material',
        absoluteRoute: '/codifier/material',
      },
      {
        name: 'Способ изготовления',
        routeName: 'manufacture',
        absoluteRoute: '/codifier/manufacture',
      },
      {
        name: 'Тип конфигурации',
        routeName: 'config',
        absoluteRoute: '/codifier/config',
      },
      {
        name: 'Изготовитель',
        routeName: 'mfr',
        absoluteRoute: '/codifier/mfr', // manufacturer
      },
      {
        name: 'Направление',
        routeName: 'direction',
        absoluteRoute: '/codifier/direction',
      },
      {
        name: 'Срок действия',
        routeName: 'validity',
        absoluteRoute: '/codifier/validity',
      }
    ]
  },
  identifiers: {
    name: 'Паспорта',
    routeName: 'identifiers',
    absoluteRoute: '/identifiers',
    child: () => import('../views/identifiers/identifiers.module').then(m => m.IdentifiersModule),
    checked: false,
  },
  roles: {
    name: 'Роли',
    routeName: 'roles',
    absoluteRoute: '/roles',
    child: () => import('../views/roles/roles.module').then(m => m.RolesModule),
    checked: false,
    subroutes: [
      {
        name: 'Редактировать роли',
        routeName: '/edit',
        absoluteRoute: '/roles/edit',
      },
      {
        name: 'Администрирование пользователей',
        routeName: '/users',
        absoluteRoute: '/roles/users',
      }
    ]
  },
  reports: {
    name: 'Отчеты',
    routeName: 'reports',
    absoluteRoute: '/reports',
    child: () => import('../views/reports/reports.module').then(m => m.ReportsModule),
    checked: false,
  },
  layers: {
    name: 'Слои',
    routeName: 'layers',
    absoluteRoute: '/layers',
    child: () => import('../views/layers/layers.module').then(m => m.LayersModule),
    checked: false,
  }
};
