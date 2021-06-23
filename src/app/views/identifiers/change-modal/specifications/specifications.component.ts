import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  @Input() data: IIdentifier | undefined;
  /**
   *  $event: SpecData
   *  (change-modal/interfaces.ts)
   */
  @Output() formChange = new EventEmitter<SpecData>();
  form: FormGroup;
  gostOptions: any[] = [];
  gostOptStream?: Observable<any[]>;

  constructor(private staticDataService: StaticDataService) {
    this.form = new FormGroup({
      gostNom: new FormControl(this.data?.gostNom),
      position: new FormControl(this.data?.position),
      standardSize: new FormControl(this.data?.standardSize),
      bracing: new FormControl(this.data?.bracing),
      skin: new FormControl(this.data?.skin),
      performerID: new FormControl(this.data?.performerID),
      qrCode: new FormControl(this.data?.qrCode),
      workType: new FormControl(this.data?.workType),
      date: new FormControl(this.data?.manDate),
      distance: new FormControl(this.data?.distance),
      mods: new FormControl(this.data?.mods),
      innom: new FormControl(this.data?.innom),
      mantype: new FormControl(this.data?.mantype),
      config: new FormControl(this.data?.config),
      foundation: new FormControl(this.data?.foundation),
      select: new FormControl(this.data?.select),
      condition: new FormControl(this.data?.condition, [Validators.required]),
    });
  }

  ngOnInit(): void {
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
          option => option.number.toLowerCase().indexOf(filterValue) !== -1
            || option.name.toLowerCase().indexOf(filterValue) !== -1);
      } else {
        return this.gostOptions;
      }
    } else {
      return this.gostOptions;
    }
  }

  onCondChange($event: MatOptionSelectionChange): void {
    const selected = this.gostOptions.find(value => value.id === $event.source.value);
    this.form.get('condition')?.setValue(selected.number + ' | ' + selected.name);
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
