import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IIdentifier} from '../../interfaces/identifiers';
import {StaticDataService} from '../../../../_servieces/static-data.service';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {MatOptionSelectionChange} from '@angular/material/core';
import {SpecData} from '../interfaces';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.sass']
})
export class SpecificationsComponent implements OnInit {
  @Input() data: SpecData | undefined;
  /**
   *  $event: SpecData
   *  (change-modal/interfaces.ts)
   */
  @Output() formChange = new EventEmitter<SpecData>();
  form: FormGroup | undefined;
  gostOptions: any[] = [];
  gostOptStream?: Observable<any[]>;

  constructor(private staticDataService: StaticDataService) {

  }

  ngOnInit(): void {
    console.log(this.data);
    this.form = new FormGroup({
      gostNom: new FormControl(this.data?.gostNom, {validators: [Validators.required]}),
      position: new FormControl(this.data?.position, {validators: [Validators.required]}),
      standardSize: new FormControl(this.data?.standardSize, {validators: [Validators.required]}),
      bracing: new FormControl(this.data?.bracing, {validators: [Validators.required]}),
      skin: new FormControl(this.data?.skin, {validators: [Validators.required]}),
      performerID: new FormControl(this.data?.performerID, {validators: [Validators.required]}),
      qrCode: new FormControl(this.data?.qrCode, {validators: [Validators.required]}),
      workType: new FormControl(this.data?.workType, {validators: [Validators.required]}),
      date: new FormControl(this.data?.manDate, {validators: [Validators.required]}),
      distance: new FormControl(this.data?.distance, {validators: [Validators.required]}),
      mods: new FormControl(this.data?.mods, {validators: [Validators.required]}),
      innom: new FormControl(this.data?.innom, {validators: [Validators.required]}),
      mantype: new FormControl(this.data?.mantype, {validators: [Validators.required]}),
      config: new FormControl(this.data?.config, {validators: [Validators.required]}),
      foundation: new FormControl(this.data?.foundation, {validators: [Validators.required]}),
      select: new FormControl(this.data?.select, {validators: [Validators.required]}),
      condition: new FormControl(this.data?.condition, {validators: [Validators.required]}),
    });
    this.form.valueChanges.subscribe((value: SpecData) => this.formChange.emit(value));
    this.staticDataService.getGost().subscribe((gosts) => {
      console.log(gosts);
      this.gostOptions = gosts;
    });
    this.gostOptStream = this.form.get('condition')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        // console.log(this._filter(value));
        return this._filter(value);
      })
    );
  }

  private _filter(value: string | undefined): any[] {
    if (value) {
      value = value.toString();
      const filterValue = value;
      if (filterValue && filterValue.trim() !== '') {
        return this.gostOptions.filter(
          option => option.number.toLowerCase().indexOf(filterValue) === 0
            || option.name.toLowerCase().indexOf(filterValue) === 0);
      } else {
        return this.gostOptions;
      }
    } else {
      return this.gostOptions;
    }
  }

  onCondChange($event: MatOptionSelectionChange): void {
    const selected = this.gostOptions.find(value => value.id === $event.source.value);
    this.form?.get('condition')?.setValue(selected.number + ' | ' + selected.name);
  }

  highlight(query: string, item: string): HTMLElement | string {
    if (!query) {
      return item;
    } else {
      return item.replace(new RegExp(query, 'gi'), (match: any) => {
        return '<span class="highlightText">' + match + '</span>';
      });
    }
  }
}
