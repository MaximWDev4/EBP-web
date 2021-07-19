import {NgModule} from '@angular/core';
import {NomenclatureComponent} from './nomenclature.component';
import {NomenclatureRoutingModule} from './nomenclature-routing.module';
import {CommonModule} from '@angular/common';
import {NomenItemComponent} from './nomen-item/nomen-item.component';
import {SvgModule} from '../../../svg/svg.module';
import {FormsModule} from '@angular/forms';
import {DynamicDataService} from '../../../_servieces/dynamic-data.service';

@NgModule({
  declarations: [
    NomenclatureComponent,
    NomenItemComponent,
  ],
  imports: [
    NomenclatureRoutingModule,
    SvgModule,
    CommonModule,
    FormsModule,
  ],
  providers: [DynamicDataService]
})
export class NomenclatureModule { }
