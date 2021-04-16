import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignTypesComponent} from './sign-types.component';

const routes: Routes = [
  {
    path: '',
    component: SignTypesComponent,
    data: {
      title: 'Кодификатор'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignTypesRoutingModule {
}
