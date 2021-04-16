import {NgModule} from '@angular/core';
import {CodifierComponent} from './codifier.component';
import {CodifierRoutingModule} from './codifier-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CodifierComponent,
  ],
  imports: [
    CodifierRoutingModule,
    MatSelectModule,
    CommonModule
  ],
})
export class CodifierModule { }
