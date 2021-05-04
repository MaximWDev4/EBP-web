import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {NgbDateRuParserFormatter} from '../../../_helpers/ngb-date-ru-parser-formatter';

@Component({
  selector: 'app-ident-filters',
  templateUrl: './ident-filters.component.html',
  styleUrls: ['./ident-filters.component.sass']
})
export class IdentFiltersComponent implements OnInit {

  hoveredDate?: NgbDate;
  minDateFrom: NgbDate;
  maxDateFrom: NgbDate;
  minDateTo: NgbDate;
  maxDateTo: NgbDate;
  @Input() submitted?: boolean;
  @Output() Submit = new EventEmitter<any>();
  filtersForm: FormGroup;


  constructor(private calendar: NgbCalendar,
              public dateFormatter: NgbDateRuParserFormatter) {
    this.minDateFrom = calendar.getPrev(calendar.getToday(), 'y', 100);
    this.maxDateFrom = calendar.getPrev(calendar.getToday(), 'd', 1);
    this.minDateTo = calendar.getPrev(calendar.getToday(), 'y', 100);
    this.maxDateTo = calendar.getToday();
    this.filtersForm = new FormGroup({
      dateFrom: new FormControl(this.maxDateFrom),
      dateTo: new FormControl(this.maxDateTo),
      idType: new FormControl('Approved')
    });
    // this.guestObj;
  }


  ngOnInit(): void {
  }

  get f(): {[p: string]: AbstractControl} { return this.filtersForm.controls; }

  onDateSelection(date: NgbDate, target: any, dateType: string): void {
    if (dateType === 'dob') {
      this.f.dob.setValue(date);
    }

    target.close();
  }

  isInvalid(attr: string): any {
    return (this.filtersForm.get(attr)?.touched
      || this.filtersForm.get(attr)?.dirty
      || this.submitted)
      && this.filtersForm.get(attr)?.errors;
  }


  getErrors(attr: string): any {
    return this.filtersForm.get(attr)?.errors;
  }

  validateInput(currentValue: NgbDate, input: string): NgbDate | null {
    const parsed = this.dateFormatter.parse(input);
    return (parsed && this.calendar.isValid(NgbDate.from(parsed))) ? NgbDate.from(parsed) : currentValue;
  }

  isHovered(date: NgbDate, target: any, minDate: NgbDate, maxDate: NgbDate): any {
    return this.hoveredDate && !target && !date.before(minDate)
      && !date.after(maxDate);
  }

  isDisabled(date: NgbDate, minDate: NgbDate, maxDate: NgbDate): boolean {
    return date.before(minDate) || date.after(maxDate);
  }

  submit(): void {
    this.Submit.emit(this.f);
  }
}
