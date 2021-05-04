import {NgModule} from '@angular/core';
import {IdentifiersComponent} from './identifiers.component';
import {MatSelectModule} from '@angular/material/select';
import {IdentifiersRoutingModule} from './identifiers-routing.module';
import {CommonModule} from '@angular/common';
import { IdentItemComponent } from './ident-item/ident-item.component';
import {SvgModule} from '../../svg/svg.module';
import { IdentFiltersComponent } from './ident-filters/ident-filters.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    IdentifiersComponent,
    IdentItemComponent,
    IdentFiltersComponent,
  ],
  imports: [
    IdentifiersRoutingModule,
    MatSelectModule,
    CommonModule,
    SvgModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgxPaginationModule
  ],
})
export class IdentifiersModule { }
