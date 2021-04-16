import {NgModule} from '@angular/core';
import {IdentifiersComponent} from './identifiers.component';
import {MatSelectModule} from '@angular/material/select';
import {IdentifiersRoutingModule} from './identifiers-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    IdentifiersComponent,
  ],
  imports: [
    IdentifiersRoutingModule,
    MatSelectModule,
    CommonModule
  ],
})
export class IdentifiersModule { }
