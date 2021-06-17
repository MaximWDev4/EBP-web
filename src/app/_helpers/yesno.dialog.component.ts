import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'yesno-dialog',
  template: `
    <h1 mat-dialog-title class="text-info">{{data.title}}</h1>
    <div mat-dialog-content>
      <p>{{data.content}}</p>
    </div>
    <div class="row justify-content-end" mat-dialog-actions>
      <button class="btn btn-dark m-2" mat-button (click)="onNoClick(false)">Нет</button>
      <button class="btn btn-info m-2" mat-button (click)="onNoClick(true)" cdkFocusInitial>Да</button>
    </div>
  `,
})
export class YesnoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<YesnoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, content: string }) {}

  onNoClick(a: boolean): void {
    this.dialogRef.close(a);
  }

}
