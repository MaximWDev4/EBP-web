import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IRole} from '../../interfaces/role';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-roles-item',
  templateUrl: './edit-roles-item.component.html',
  styleUrls: ['./edit-roles-item.component.sass']
})
export class EditRolesItemComponent implements OnInit {
  @Input() item: IRole | any;
  @Input() firstRow = false;
  @Output() editRow = new EventEmitter();
  editing = false;
  form?: FormGroup;
  itarableForm?: Iterable<any>;
  constructor() {
  }

  ngOnInit(): void {
    if (!this.firstRow) {
    this.form = new FormGroup({});
    this.toArr(this.item).forEach((prop) =>
      this.form?.addControl(prop.key, new FormControl(prop.value))
    );
  }
    if (this.form) {
      this.itarableForm = this.formToItarable(this.form);
    }
  }

  toArr(item: IRole): {key: string, value: string | boolean}[] {
    const tempArr: {key: string, value: string|boolean}[] = [];
    Object.entries(item).forEach((value: [string, string|number|boolean], index) => {
      if (typeof value[1] === 'boolean') {
        tempArr.push({key: value[0], value: value[1]});
      } else {
        tempArr.push({key: value[0], value: value[1].toString()});
      }
      });
    return tempArr;
  }

  formToItarable(form: FormGroup): Iterable<any> | undefined{
    if (this.form) {
      console.log(Object.entries(form.controls));
      return Object.entries(form.controls);
    }
    return undefined;
  }

  isStr(value: string | boolean): boolean {
    return typeof value === 'string';
  }
}
