import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultLayoutComponent} from './containers/default-layout/default-layout.component';
import {HomeLayoutComponent} from './containers/home-layout/home-layout.component';
import {identifierName} from '@angular/compiler';
import {Page404Component} from './views/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
      }
    ]
  },
  {
    path: 'codifier',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-types'
      },
      {
        path: 'sign-types',
        loadChildren: () => import('./views/sign-types/sign-types.module').then(m => m.SignTypesModule),
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
      },
      {
        path: 'nomenclature',
        loadChildren: () => import('./views/sign-types/sign-types.module').then(m => m.SignTypesModule),
      }
    ],
  },
  {
    path: 'identifiers',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/sign-types/sign-types.module').then(m => m.SignTypesModule),
      }
    ]
  },
  {
    path: 'roles',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/sign-types/sign-types.module').then(m => m.SignTypesModule),
      }
    ]
  },
  {
    path: 'reports',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/sign-types/sign-types.module').then(m => m.SignTypesModule),
      }
    ]
  },
  {
    path: 'layers',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/sign-types/sign-types.module').then(m => m.SignTypesModule),
      }
    ]
  },
  {
    path: '**',
    component: Page404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
