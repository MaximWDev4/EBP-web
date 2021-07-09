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
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {DirectivesModule} from '../../directives/directives.module';
import {MatTabsModule} from '@angular/material/tabs';
import {ChangeModalModule} from './change-modal/change-modal.module';
import {ImageDNDModule} from './image-component/image.module';
import {StaticDataService} from '../../_servieces/static-data.service';
import {DynamicDataService} from '../../_servieces/dynamic-data.service';
import { IdentColumnsComponent } from './ident-columns/ident-columns.component';

@NgModule({
  declarations: [
    IdentifiersComponent,
    IdentItemComponent,
    IdentFiltersComponent,
    IdentColumnsComponent,
  ],
  imports: [
    IdentifiersRoutingModule,
    ChangeModalModule,
    CommonModule,
    SvgModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgxPaginationModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    DirectivesModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [DynamicDataService]
})
export class IdentifiersModule { }
