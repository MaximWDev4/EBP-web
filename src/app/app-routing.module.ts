import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultLayoutComponent} from './containers/default-layout/default-layout.component';
import {Page404Component} from './views/page404/page404.component';
import {RoutingMap} from './_helpers/routing-map';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutingMap.home.routeName,
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: RoutingMap.home.routeName,
        loadChildren: RoutingMap.home.child,
      },
      {
        path: RoutingMap.codifier.routeName,
        loadChildren: RoutingMap.codifier.child
      },
      {
        path: RoutingMap.identifiers.routeName,
        loadChildren: RoutingMap.identifiers.child,
      },
      {
        path: RoutingMap.roles.routeName,
        loadChildren: RoutingMap.roles.child,
      },
      {
        path: RoutingMap.reports.routeName,
        loadChildren: RoutingMap.reports.child,
      },
      {
        path: RoutingMap.layers.routeName,
        loadChildren: RoutingMap.layers.child,
      },
      {
        path: '**',
        component: Page404Component,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
