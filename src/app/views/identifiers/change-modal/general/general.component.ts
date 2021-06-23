import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IIdentifier} from '../../interfaces/identifiers';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.sass']
})
export class GeneralComponent implements OnInit {
  @Input() data: IIdentifier | undefined;
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      mainStr: new FormControl(this.data?.mainStr),
      crossStr: new FormControl(this.data?.crossStr),
      objectGroup: new FormControl('1'),
      worker: new FormControl('he'),
      checker: new FormControl('he'),
      });
  }

  ngOnInit(): void {
  }

}
