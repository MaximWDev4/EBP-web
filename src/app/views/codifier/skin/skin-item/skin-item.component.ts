import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skin-item',
  templateUrl: './skin-item.component.html',
  styleUrls: ['./skin-item.component.sass']
})
export class SkinItemComponent implements OnInit {
  @Input() query = '';
  @Input() item: any;
  visited = false;
  deleted = false;
  expand = false;

  constructor() {
  }

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
