import {Component, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-role-item',
  templateUrl: './role-item.component.html',
  styleUrls: ['./role-item.component.sass']
})
export class RoleItemComponent implements OnInit {
  @Input() item: any;
  @Input() query?: string;
  @Output() confirmEdit = new EventEmitter();
  expand = false;
  visited = false;
  deleted = false;
  showDropdown = false;
  form: FormGroup = new FormGroup({});
  constructor() {

  }

  ngOnInit(): void {
    this.form = new FormGroup(
    {
      firstname: new FormControl(this.item.firstname), // имя
      middlename: new FormControl(this.item.middlename), // отчество
      surname: new FormControl(this.item.surname), // фамилия
      login: new FormControl(this.item.login),
      nom:  new FormControl(this.item.nom),
      pass:  new FormControl(this.item.pass),
      active:  new FormControl(this.item.active),
      role: new FormControl(this.item.role),
      permissions: new FormControl(this.item.permissions),
    }
  );
  }

  highlight(): string {
    if (!this.query) {
      return `<span> ${[ this.item.firstname, this.item.middlename, this.item.surname ].join(' ')}</span>`;
    } else {
      return [ this.item.firstname, this.item.middlename, this.item.surname ].join(' ')
        .replace(new RegExp(this.query, 'gi'), (match: any) => {
        return '<span class="highlightText">' + match + '</span>';
      });
    }
  }

  edit(): void {
    if (!this.deleted) {
      this.expand = !this.expand;
      this.visited = true;
    }
  }

  save(): void {
      this.expand = false;
      console.log(this.form.value);
      this.confirmEdit.emit(this.form.value);
  }
}
