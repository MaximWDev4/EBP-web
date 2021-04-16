import {NgModule} from '@angular/core';
import {LayersComponent} from './layers.component';
import {MatSelectModule} from '@angular/material/select';
import {LayersRoutingModule} from './layers-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LayersComponent
  ],
  imports: [
    LayersRoutingModule,
    MatSelectModule,
    CommonModule
  ],
})
export class LayersModule { }
