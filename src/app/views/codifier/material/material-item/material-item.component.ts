import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.sass']
})
export class MaterialItemComponent implements OnInit {
  @Input() item: any;
  @Input() query = '';
  expand = false;
  visited = false;

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
      this.expand = !this.expand;
      this.visited = true;
  }
}
