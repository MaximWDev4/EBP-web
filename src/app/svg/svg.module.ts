import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditComponent} from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import {CheckmarkComponent} from './checkmark/checkmark.component';

@NgModule({
  declarations: [
    EditComponent,
    DeleteComponent,
    CheckmarkComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EditComponent,
    DeleteComponent,
    CheckmarkComponent
  ]
})
export class SvgModule { }
