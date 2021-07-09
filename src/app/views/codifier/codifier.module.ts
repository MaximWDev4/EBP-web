import {NgModule} from '@angular/core';
import {CodifierComponent} from './codifier.component';
import {CodifierRoutingModule} from './codifier-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import { SkinComponent } from './skin/skin.component';
import { SkinItemComponent } from './skin/skin-item/skin-item.component';
import {FormsModule} from '@angular/forms';
import {StaticDataService} from '../../_servieces/static-data.service';
import {SvgModule} from '../../svg/svg.module';
import { MaterialComponent } from './material/material.component';
import { MaterialItemComponent } from './material/material-item/material-item.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { ManufactureItemComponent } from './manufacture/manufacture-item/manufacture-item.component';
import { ConfigComponent } from './config/config.component';
import { ConfigItemComponent } from './config/config-item/config-item.component';
import { ValidityComponent } from './validity/validity.component';
import { ValidityItemComponent } from './validity/validity-item/validity-item.component';

@NgModule({
  declarations: [
    CodifierComponent,
    SkinComponent,
    SkinItemComponent,
    MaterialComponent,
    MaterialItemComponent,
    ManufactureComponent,
    ManufactureItemComponent,
    ConfigComponent,
    ConfigItemComponent,
    ValidityComponent,
    ValidityItemComponent,
  ],
  imports: [
    CodifierRoutingModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    SvgModule
  ],
  providers: [
    StaticDataService
  ]
})
export class CodifierModule { }
