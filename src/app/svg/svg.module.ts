import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditComponent} from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { CheckmarkComponent } from './checkmark/checkmark.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    EditComponent,
    DeleteComponent,
    CheckmarkComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EditComponent,
    DeleteComponent,
    CheckmarkComponent,
    MapComponent
  ]
})
export class SvgModule { }
