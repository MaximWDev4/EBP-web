import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-role-item',
  templateUrl: './role-item.component.html',
  styleUrls: ['./role-item.component.sass']
})
export class RoleItemComponent implements OnInit {
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
