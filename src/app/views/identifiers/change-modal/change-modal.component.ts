import {AfterViewInit, Component, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {YesnoDialogComponent} from '../../../_helpers/yesno.dialog.component';
import {FormControl, FormGroup} from '@angular/forms';
import {IIdentifier} from '../interfaces/identifiers';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {StaticDataService} from '../../../_servieces/static-data.service';
import {SpecData} from './interfaces';

@Component({
  selector: 'app-change-modal',
  templateUrl: './change-modal.component.html',
  styleUrls: ['./change-modal.component.sass']
})
export class ChangeModalComponent implements OnInit, AfterViewInit{
  form!: FormGroup;
  @ViewChild('autosize') autosize: CdkTextareaAutosize | undefined;
  loaded = false;

  constructor(
    private ngZone: NgZone,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ChangeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, content: IIdentifier }
  ) { }

  triggerResize(): void {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => {
        if (this.autosize) {
          this.autosize.resizeToFitContent(true);
        }
      });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      gostNom: new FormControl(this.data.content?.gostNom),
      position: new FormControl(this.data.content?.position),
      mainStr: new FormControl(this.data.content?.mainStr),
      crossStr: new FormControl(this.data.content?.crossStr),
      standardSize: new FormControl(this.data.content?.standardSize),
      bracing: new FormControl(this.data.content?.bracing),
      skin: new FormControl(this.data.content?.skin),
      performerID: new FormControl(this.data.content?.performerID),
      qrCode: new FormControl(this.data.content?.qrCode),
      workType: new FormControl(this.data.content?.workType),
      date: new FormControl(this.data.content?.manDate),
      objectGroup: new FormControl('1')
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.loaded = true, 500);
  }

  save(v: any): void {
    console.log('saved');
    this.dialogRef.close(v);
  }

  askCloseSave(text: string): void {
    let res:
    { delete: true; edit: false; id: number|string; } |
    {edit: true; delete: false; item: IIdentifier } |
    {delete: false; edit: false; };
    const dialogRef = this.dialog.open(YesnoDialogComponent, {
      width: '300px',
      data: {title: 'Внимание!', content: text},
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      res = {edit: true, item: this.form.value, delete: false};
      if (result) {
        this.dialogRef.close(res);
      }
    });
  }
  askCloseDelete(text: string): void {
    const dialogRef = this.dialog.open(YesnoDialogComponent, {
      width: '300px',
      data: {title: 'Внимание!', content: text}
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.delete();
      }
    });
  }

  askCloseNoSave(text: string): void {
    let res:
      { delete: true; edit: false; id: number|string; } |
      {edit: true; delete: false; item: IIdentifier } |
      {delete: false; edit: false; };
    const dialogRef = this.dialog.open(YesnoDialogComponent, {
      width: '300px',
      data: {title: 'Внимание!', content: text}
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      res = {delete: false, edit: false};
      if (result) {
        this.dialogRef.close(res);
      }
    });
  }

  delete(): void {
    let res:
      { delete: true; edit: false; id: number|string; } |
      {edit: true; delete: false; item: IIdentifier } |
      {delete: false; edit: false; };
    res = {edit: false, delete: true, id: this.data.content.qrCode};
    console.log(res);
    this.dialogRef.close(res);
  }


  OnNo(): void {
    this.askCloseNoSave('Вы уверены, что хотите выйти без сохранения изменений?');
  }

  OnYes(): void {
    this.askCloseSave('Вы уверены, что хотите сохранить изменения?');
  }

  specChange(value: SpecData): void {
    console.log(value);
  }
}
