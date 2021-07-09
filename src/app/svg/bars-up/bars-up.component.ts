import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bars-up',
  templateUrl: './bars-up.component.html',
  styleUrls: ['./bars-up.component.sass']
})
export class BarsUpComponent implements OnInit {

  @Input() color = 'green';
  @Input() height = '20px';
  @Input() width = '20px';

  constructor() { }

  ngOnInit(): void {
  }

}
