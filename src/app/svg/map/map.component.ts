import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  @Input() color = 'black';
  @Input() height = '20px';
  @Input() width = '20px';
  constructor() { }

  ngOnInit(): void {
  }

}
