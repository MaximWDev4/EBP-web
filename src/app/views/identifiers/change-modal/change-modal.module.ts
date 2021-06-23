import {NgModule} from '@angular/core';
import {DirectivesModule} from '../../../directives/directives.module';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {ChangeModalComponent} from './change-modal.component';
import {SpecificationsComponent} from './specifications/specifications.component';
import {ActionsComponent} from './actions/actions.component';
import {GeneralComponent} from './general/general.component';
import {ImageDNDModule} from '../image-component/image.module';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {SvgModule} from '../../../svg/svg.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CommonModule} from '@angular/common';
import {StaticDataService} from '../../../_servieces/static-data.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [
    DirectivesModule,
    MatInputModule,
    MatTabsModule,
    ImageDNDModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    SvgModule,
    MatTooltipModule,
    CommonModule,
    MatAutocompleteModule
  ],
  declarations: [
    ChangeModalComponent,
    SpecificationsComponent,
    ActionsComponent,
    GeneralComponent,
  ],
  exports: [
    ChangeModalComponent
  ],
  providers: [
    StaticDataService,
  ]
  })
export class ChangeModalModule {}
