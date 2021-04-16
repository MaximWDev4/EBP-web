import {AfterViewInit, Component, ElementRef, HostListener} from '@angular/core';
import {UtilitiesService} from './_servieces/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit{
  title = 'EBP';
  constructor(private elementRef: ElementRef,
              private utilitiesService: UtilitiesService){
  }
  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    this.utilitiesService.documentClickedTarget.next(event.target)
  }
  ngAfterViewInit(): void{
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#ECECEC';
  }
}
