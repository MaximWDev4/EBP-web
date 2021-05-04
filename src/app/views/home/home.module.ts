import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import { MarkerService } from 'src/app/_servieces/marker.service';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    MatSelectModule,
    CommonModule,
  ],
  providers: [
    MarkerService,
  ]
})
export class HomeModule { }
