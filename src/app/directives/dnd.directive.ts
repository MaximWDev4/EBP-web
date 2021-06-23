import {Directive, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  public files: any;
  @Output() fileDropped = new EventEmitter();
  @HostBinding('class.fileover') fileOver: boolean;

  @HostListener('dragover', ['$event']) onDragOver(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
    console.log('dragover');
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    console.log('dragleave');
  }

  @HostListener('drop', ['$event']) public ondrop(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    console.log(evt);
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
      console.log(`Перемещено ${evt.dataTransfer.files.length} файлов`);
    }
    console.log('dragdrop');
  }

  @HostListener('body:dragover', ['$event'])
  onBodyDragOver(event: DragEvent): void {
    if (true) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  @HostListener('body:drop', ['$event'])
  onBodyDrop(event: DragEvent): void {
    if (true) {
      event.preventDefault();
    }
  }

  constructor() { this.fileOver = false; }

}
