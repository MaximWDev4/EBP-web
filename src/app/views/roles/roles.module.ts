import {NgModule} from '@angular/core';
import {RolesComponent} from './roles.component';
import {RolesRoutingModule} from './roles-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {UserRoleItemComponent} from './user-role-item/user-role-item.component';
import {SvgModule} from '../../svg/svg.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InfoService} from '../../_servieces/info.service';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditRolesComponent } from './edit-roles/edit-roles.component';
import { EditRolesItemComponent } from './edit-roles/edit-roles-item/edit-roles-item.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    RolesComponent,
    UserRoleItemComponent,
    SelectDropdownComponent,
    AddUserComponent,
    EditRolesComponent,
    EditRolesItemComponent,
  ],
    imports: [
        RolesRoutingModule,
        MatSelectModule,
        SvgModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatSlideToggleModule,
    ],
  providers: [
    InfoService
  ]
})
export class RolesModule { }
