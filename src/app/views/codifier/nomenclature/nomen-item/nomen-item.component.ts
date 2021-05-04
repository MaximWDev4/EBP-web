import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nomen-item',
  templateUrl: './nomen-item.component.html',
  styleUrls: ['./nomen-item.component.sass']
})
export class NomenItemComponent implements OnInit {
  @Input() item: any;
  @Input() query?: string;
  expand = false;
  visited = false;
  deleted = false;
  constructor() { }

  ngOnInit(): void {
  }

  highlight(): HTMLElement {
    if (!this.query) {
      return this.item.name;
    } else {
      return this.item.name.replace(new RegExp(this.query, 'gi'), (match: any) => {
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

}
