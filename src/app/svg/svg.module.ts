import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditComponent} from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CheckmarkComponent } from './checkmark/checkmark.component';
import { MapComponent } from './map/map.component';
import { BarsUpComponent } from './bars-up/bars-up.component';
import { BarsDownComponent } from './bars-down/bars-down.component';
import { DoubleDownArrowComponent } from './double-down-arrow/double-down-arrow.component';

@NgModule({
  declarations: [
    EditComponent,
    DeleteComponent,
    CheckmarkComponent,
    MapComponent,
    BarsUpComponent,
    BarsDownComponent,
    DoubleDownArrowComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EditComponent,
    DeleteComponent,
    CheckmarkComponent,
    MapComponent,
    BarsUpComponent,
    DoubleDownArrowComponent
  ]
})
export class SvgModule { }
