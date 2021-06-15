import {AfterContentChecked, AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.sass']
})
export class SelectDropdownComponent implements AfterContentChecked{
  loaded = false;
  @Input() permissions = ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4'];
  @Output() selectPermission = new EventEmitter();
  @Output() closeDropdown = new EventEmitter();

  @HostListener('document:click', ['$event'])
  clickout(event: any): void {
    if (this.eRef.nativeElement.contains(event.target)) {
      console.log('clicked inside');
    } else {
      if (this.loaded) {
        console.log('clicked outside');
        this.closeDropdown.emit();
      } else {
        console.log('loading...');
      }
    }
  }

  constructor(private eRef: ElementRef) {
  }

  ngAfterContentChecked(): void {
    setTimeout(() => this.loaded = true, 100);
  }

}
