import {NgModule} from '@angular/core';
import {NomenclatureComponent} from './nomenclature.component';
import {NomenclatureRoutingModule} from './nomenclature-routing.module';
import {CommonModule} from '@angular/common';
import { NomenItemComponent } from './nomen-item/nomen-item.component';
import {SvgModule} from '../../../svg/svg.module';

@NgModule({
  declarations: [
    NomenclatureComponent,
    NomenItemComponent,
  ],
  imports: [
    NomenclatureRoutingModule,
    SvgModule,
    CommonModule,
  ],
})
export class NomenclatureModule { }
