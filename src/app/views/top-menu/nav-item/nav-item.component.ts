import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {UtilitiesService} from '../../../_servieces/utilities.service';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.sass']
})
export class NavItemComponent implements OnInit {
  @ViewChild('somePopup', { read: ElementRef, static: false }) somePopup: ElementRef = new ElementRef('somePopup');
  @Input() route: any;

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit(): void {
    this.utilitiesService.documentClickedTarget
      .subscribe(target => this.documentClickListener(target));
  }

  documentClickListener(target: any): void {
    if (this.somePopup.nativeElement.contains(target)){

    }
    // Clicked inside
    else {
      this.route.checked = false;
    }
    // Clicked outside
  }

}
