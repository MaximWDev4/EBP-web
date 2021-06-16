import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {NgbDateRuParserFormatter} from '../../../_helpers/ngb-date-ru-parser-formatter';

@Component({
  selector: 'app-ident-filters',
  templateUrl: './ident-filters.component.html',
  styleUrls: ['./ident-filters.component.sass']
})
export class IdentFiltersComponent implements OnInit {


  @Input() submitted?: boolean;
  @Output() Submit = new EventEmitter<any>();
  // @ts-ignore
  filtersForm: FormGroup;
  fromDate: NgbDate|null;
  toDate: NgbDate|null;
  hoveredDate?: NgbDate | null;
  minDateFrom: NgbDate;
  maxDateFrom: NgbDate;
  minDateTo: NgbDate;
  maxDateTo: NgbDate;


  constructor(private calendar: NgbCalendar,
              public dateFormatter: NgbDateRuParserFormatter,) {
    this.minDateFrom = calendar.getPrev(calendar.getToday(), 'y', 100);
    this.maxDateFrom = calendar.getPrev(calendar.getToday(), 'd', 1);
    this.minDateTo = calendar.getPrev(calendar.getToday(), 'y', 100);
    this.maxDateTo = calendar.getToday();
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.filtersForm = new FormGroup({
      idType: new FormControl('Approved')
    });
    // this.guestObj;
  }


  ngOnInit(): void {
  }

  get f(): {[p: string]: AbstractControl} { return this.filtersForm.controls; }

  onDateSelection(date: NgbDate): void {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate): boolean | null | undefined {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate): boolean | null | undefined {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate): boolean | null | undefined {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.dateFormatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
}

  isDisabled(date: NgbDate, minDate: NgbDate, maxDate: NgbDate): boolean {
    return date.before(minDate) || date.after(maxDate);
  }

  ngbDateToTimestamp(date: NgbDate|null|undefined, onNull: number): number {
    if (date) {
      return (new Date(date.year, date.month, date.day)).getTime();
    } else {
      return onNull;
    }
  }

  submit(): void {
    this.Submit.emit({
      ...this.filtersForm.value,
      fromDate: this.ngbDateToTimestamp(this.fromDate, new Date(1970, 0, 1).getTime()),
      toDate: this.ngbDateToTimestamp(this.toDate,  new Date(Date.now()).getTime())
    } );
  }
}
