import {Component, Input, OnInit, Output} from '@angular/core';
import {IDRecord} from '../identifiers.component';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbDateRuParserFormatter} from '../../../_helpers/ngb-date-ru-parser-formatter';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {YesnoDialogComponent} from '../../../_helpers/yesno.dialog.component';

@Component({
  selector: 'app-ident-item',
  templateUrl: './ident-item.component.html',
  styleUrls: ['./ident-item.component.sass'],
})
export class IdentItemComponent implements OnInit {
  @Input() item?: IDRecord;
  @Output() saveChanges = new EventEmitter();
  @Output() deleteRow = new EventEmitter();
  // @ts-ignore
  form: FormGroup;
  expand = false;
  visited = false;
  deleted = false;
  constructor(private parser: NgbDateRuParserFormatter,
              public dialog: MatDialog) {  }

  ngOnInit(): void {
    this.form = new FormGroup({
      gostNom: new FormControl(this.item?.gostNom),
      position: new FormControl(this.item?.position),
      mainStr: new FormControl(this.item?.mainStr),
      crossStr: new FormControl(this.item?.crossStr),
      standardSize: new FormControl(this.item?.standardSize),
      bracing: new FormControl(this.item?.bracing),
      skin: new FormControl(this.item?.skin),
      performerID: new FormControl(this.item?.performerID),
      qrCode: new FormControl(this.item?.qrCode),
      workType: new FormControl(this.item?.workType),
      date: new FormControl(this.item?.date),
      objectGroup: new FormControl('1')
    });
  }

  edit(): void {
    if (!this.deleted) {
      this.expand = !this.expand;
      this.visited = true;
    }
  }

  getDateStr(date: number | string): string {
    const dateF: Date = new Date(date);
    const ngbDate: NgbDate = new NgbDate(dateF.getFullYear(), dateF.getMonth(), dateF.getDate());
    return this.parser.format(ngbDate) + ' ' + dateF.getHours() + ':' + dateF.getMinutes();
  }

  save(v: any): void {
    console.log('saved');
    this.saveChanges.emit(v);
  }

  delete(): void {
    this.deleteRow.emit(this.item?.qrCode);
  }

  ask(text: string, action: (v?: any) => void): void {
    const dialogRef = this.dialog.open(YesnoDialogComponent, {
      width: '250px',
      data: {title: 'Внимание!', content: text}
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log('The dialog was closed');
      if (result) {
        action.bind(this)(this.form.value);
      }
    });
  }
}
