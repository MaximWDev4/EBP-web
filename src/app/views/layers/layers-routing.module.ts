import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayersComponent} from './layers.component';

const routes: Routes = [
  {
    path: '',
    component: LayersComponent,
    data: {
      title: 'Главная'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayersRoutingModule {
}
