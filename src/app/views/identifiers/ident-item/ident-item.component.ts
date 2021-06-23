import {Component, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NgbDateRuParserFormatter} from '../../../_helpers/ngb-date-ru-parser-formatter';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {IIdentifier} from '../interfaces/identifiers';


@Component({
  selector: 'app-ident-item',
  templateUrl: './ident-item.component.html',
  styleUrls: ['./ident-item.component.sass'],
})
export class IdentItemComponent {
  @Input() item?: IIdentifier | any;
  @Input() firstRow = false;
  @Output() editRow = new EventEmitter();
  // @ts-ignore
  form: FormGroup;
  expand = false;
  visited = false;
  deleted = false;
  constructor(private parser: NgbDateRuParserFormatter,
              public dialog: MatDialog) {  }

  edit(): void {
    if (!this.deleted) {
      this.visited = true;
      this.editRow.emit();
    }
  }

  getDateStr(date: number | string): string {
    const dateF: Date = new Date(date);
    const ngbDate: NgbDate = new NgbDate(dateF.getFullYear(), dateF.getMonth(), dateF.getDate());
    return this.parser.format(ngbDate) + ' ' + dateF.getHours() + ':' + dateF.getMinutes();
  }
}
