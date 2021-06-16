import {AfterContentChecked, AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.sass']
})
export class SelectDropdownComponent implements AfterContentChecked{
  loaded = false;
  @Input() permissions = [{name: 'user_red', active: false}, {name: 'znaki_qr', active: false}, {name: 'znaki_qr_edit', active: false},
    {name: 'znaki_qr_delete', active: false}, {name: 'znaki_fe', active: false}, {name: 'znaki_ae', active: false}];
  @Input() enabled = false;
  @Output() closeDropdown = new EventEmitter();

  @HostListener('document:click', ['$event'])
  clickout(event: any): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      if (this.loaded) {
        this.closeDropdown.emit(this.permissions);
      }
    }
  }

  constructor(private eRef: ElementRef) {
  }

  ngAfterContentChecked(): void {
    setTimeout(() => this.loaded = true, 100);
  }

}
