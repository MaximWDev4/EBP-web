import {NgModule} from '@angular/core';
import {ReportsComponent} from './reports.component';
import {ReportsRoutingModule} from './reports-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ReportsComponent,
  ],
  imports: [
    ReportsRoutingModule,
    MatSelectModule,
    CommonModule
  ],
})
export class ReportsModule { }
