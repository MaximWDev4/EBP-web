import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CodifierComponent} from './codifier.component';
import {SkinComponent} from './skin/skin.component';
import {MaterialComponent} from './material/material.component';
import {ManufactureComponent} from './manufacture/manufacture.component';
import {ConfigComponent} from './config/config.component';
import {ValidityComponent} from './validity/validity.component';

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
  },
  {
    path: 'skin',
    component: SkinComponent,
    data: {
      title: 'Тип пленки'
    }
  },
  {
    path: 'material',
    component: MaterialComponent,
    data: {
      title: 'Материал основы'
    }
  },
  {
    path: 'manufacture',
    component: ManufactureComponent,
    data: {
      title: 'Способ изготовления'
    }
  },
  {
    path: 'config',
    component: ConfigComponent,
    data: {
      title: 'Тип конфигурации'
    }
  },
  {
    path: 'validity',
    component: ValidityComponent,
    data: {
      title: 'Срок действия'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodifierRoutingModule {
}
