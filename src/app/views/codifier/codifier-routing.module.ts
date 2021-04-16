import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CodifierComponent} from './codifier.component';

const routes: Routes = [
  {
    path: '',
    component: CodifierComponent,
    data: {
      title: 'Кодификатор'
    },
  },
  {
    path: 'sign-types',
    loadChildren: () => import('./sign-types/sign-types.module').then(m => m.SignTypesModule),
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
  },
  {
    path: 'nomenclature',
    loadChildren: () => import('./nomenclature/nomenclature.module').then(m => m.NomenclatureModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodifierRoutingModule {
}
