import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit{
  title = 'EBP';
  constructor(private elementRef: ElementRef){
  }
  ngAfterViewInit(): void{
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#ECECEC';
  }
}
