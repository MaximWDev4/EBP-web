import {NgModule} from '@angular/core';
import {ImageComponentComponent} from './image-component.component';
import {DirectivesModule} from '../../../directives/directives.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    DirectivesModule,
    CommonModule
  ],
  declarations: [
    ImageComponentComponent
  ],
  exports: [
    ImageComponentComponent
  ]
})
export class ImageDNDModule {}
