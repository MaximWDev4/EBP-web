import {NgModule} from '@angular/core';
import {RolesComponent} from './roles.component';
import {RolesRoutingModule} from './roles-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {RoleItemComponent} from './role-item/role-item.component';
import {SvgModule} from '../../svg/svg.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InfoService} from '../../_servieces/info.service';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    RolesComponent,
    RoleItemComponent,
    SelectDropdownComponent,
    AddUserComponent,
  ],
  imports: [
    RolesRoutingModule,
    MatSelectModule,
    SvgModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    InfoService
  ]
})
export class RolesModule { }
