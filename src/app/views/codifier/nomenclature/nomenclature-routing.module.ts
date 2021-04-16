import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NomenclatureComponent} from './nomenclature.component';

const routes: Routes = [
  {
    path: '',
    component: NomenclatureComponent,
    data: {
      title: 'Номенклатура'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NomenclatureRoutingModule {
}
