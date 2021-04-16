import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IdentifiersComponent} from './identifiers.component';

const routes: Routes = [
  {
    path: '',
    component: IdentifiersComponent,
    data: {
      title: 'Паспорта'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentifiersRoutingModule {
}
