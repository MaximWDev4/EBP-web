import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [
  {
    path: ':x/:y/:zoom',
    component: HomeComponent,
    data: {
      title: 'Главная'
    },
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Главная'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
