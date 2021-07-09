import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bars-down',
  templateUrl: './bars-down.component.html',
  styleUrls: ['./bars-down.component.sass']
})
export class BarsDownComponent implements OnInit {

  @Input() color = 'green';
  @Input() height = '20px';
  @Input() width = '20px';

  constructor() { }

  ngOnInit(): void {
  }

}
