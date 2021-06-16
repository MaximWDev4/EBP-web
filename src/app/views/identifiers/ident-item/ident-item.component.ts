import {Component, Input, OnInit} from '@angular/core';
import {IDRecord} from '../identifiers.component';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbDateRuParserFormatter} from '../../../_helpers/ngb-date-ru-parser-formatter';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ident-item',
  templateUrl: './ident-item.component.html',
  styleUrls: ['./ident-item.component.sass']
})
export class IdentItemComponent implements OnInit {
  form: FormGroup;
  @Input() item?: IDRecord;
  expand = false;
  visited = false;
  deleted = false;
  constructor(private parser: NgbDateRuParserFormatter) {
    this.form = new FormGroup({
      gostNom: new FormControl(this.item?.gostNom),
      position: new FormControl(this.item?.gostNom),
      mainStr: new FormControl(this.item?.gostNom),
      crossStr: new FormControl(this.item?.gostNom),
      standardSize: new FormControl(this.item?.gostNom),
      bracing: new FormControl(this.item?.gostNom),
      skin: new FormControl(this.item?.gostNom),
      performerID: new FormControl(this.item?.gostNom),
      qrCode: new FormControl(this.item?.gostNom),
      workType: new FormControl(this.item?.gostNom),
      date: new FormControl(this.item?.gostNom),
    });
  }

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
}
