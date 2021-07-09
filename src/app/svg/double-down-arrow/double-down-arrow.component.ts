import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-double-down-arrow',
  templateUrl: './double-down-arrow.component.html',
  styleUrls: ['./double-down-arrow.component.sass']
})
export class DoubleDownArrowComponent implements OnInit {

  @Input() color = 'green';
  @Input() height = '20px';
  @Input() width = '20px';

  constructor() { }

  ngOnInit(): void {
  }

}
