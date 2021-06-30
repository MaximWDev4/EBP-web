import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RolesComponent} from './roles.component';
import {EditRolesComponent} from './edit-roles/edit-roles.component';

const routes: Routes = [
  {
    path: '',
    component: RolesComponent,
    data: {
      title: 'Администрирование пользователей'
    },
  },
  {
    path: 'edit',
    component: EditRolesComponent,
    data: {
      title: 'Редактирование ролей'
    },
  },
  {
    path: 'users',
    component: RolesComponent,
    data: {
      title: 'Администрирование пользователей'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule {
}
