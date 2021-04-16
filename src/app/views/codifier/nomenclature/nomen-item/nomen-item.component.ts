import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nomen-item',
  templateUrl: './nomen-item.component.html',
  styleUrls: ['./nomen-item.component.sass']
})
export class NomenItemComponent implements OnInit {
  @Input() item: any;
  expand = false;
  constructor() { }

  ngOnInit(): void {
  }

}
