import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IIdentifier} from '../interfaces/identifiers';

@Component({
  selector: 'app-ident-columns',
  templateUrl: './ident-columns.component.html',
  styleUrls: ['./ident-columns.component.sass']
})
export class IdentColumnsComponent implements OnInit {
  @Input() item?: IIdentifier | any;
  @Output() changeOrder = new EventEmitter();
  @Input() orderedBy = '';
  constructor() { }

  ngOnInit(): void {
  }

}
