import {NgModule} from '@angular/core';
import {RolesComponent} from './roles.component';
import {RolesRoutingModule} from './roles-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    RolesComponent,
  ],
  imports: [
    RolesRoutingModule,
    MatSelectModule,
    CommonModule
  ],
})
export class RolesModule { }
