import {NgModule} from '@angular/core';
import {RolesComponent} from './roles.component';
import {RolesRoutingModule} from './roles-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {RoleItemComponent} from './role-item/role-item.component';
import {SvgModule} from '../../svg/svg.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RolesComponent,
    RoleItemComponent,
  ],
  imports: [
    RolesRoutingModule,
    MatSelectModule,
    SvgModule,
    CommonModule,
    FormsModule
  ],
})
export class RolesModule { }
