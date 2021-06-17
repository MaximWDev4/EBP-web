import {NgModule} from '@angular/core';
import {YesnoDialogComponent} from './yesno.dialog.component';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [YesnoDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [YesnoDialogComponent]
})
export class HelpersModule {}
