import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nomen-item',
  templateUrl: './nomen-item.component.html',
  styleUrls: ['./nomen-item.component.sass']
})
export class NomenItemComponent implements OnInit {
  @Input() item: any;
  expand = false;
  visited = false;
  deleted = false;
  constructor() { }

  ngOnInit(): void {
  }

  edit(): void {
    if (!this.deleted) {
      this.expand = !this.expand;
      this.visited = true;
    }
  }
}
