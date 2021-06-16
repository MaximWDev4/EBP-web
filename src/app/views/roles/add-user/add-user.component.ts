import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup(
    {
      firstname: new FormControl(''), // имя
      middlename: new FormControl(''), // отчество
      surname: new FormControl(''), // фамилия
      login: new FormControl(''),
      nom:  new FormControl(''),
      pass:  new FormControl(''),
      active:  new FormControl(''),
      role: new FormControl(''),
    }
  );}

  ngOnInit(): void {

  }

}
