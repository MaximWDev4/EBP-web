import {NgModule} from '@angular/core';
import {SignTypesComponent} from './sign-types.component';
import {SignTypesRoutingModule} from './sign-types-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SignTypesComponent,
  ],
  imports: [
    SignTypesRoutingModule,
    MatSelectModule,
    CommonModule
  ],
})
export class SignTypesModule { }
