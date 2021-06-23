import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.sass']
})
export class ImageComponentComponent {
  @Input() initialImage?: ImageSnippet;
  @Input() name?: string;
  @Output() Select = new EventEmitter();
  selectedFile?: ImageSnippet;

  constructor(){}

  // private onSuccess(): void {
  //   this.selectedFile.pending = false;
  //   this.selectedFile.status = 'ok';
  // }
  //
  // private onError(): void {
  //   this.selectedFile.pending = false;
  //   this.selectedFile.status = 'fail';
  //   this.selectedFile.src = '';
  // }

  processFile(imageInput: FileList | null): void {
    console.log(imageInput);
    if ( imageInput !== null) {
      const file: File = imageInput[0];
      const reader = new FileReader();
      // this.selectedFile.pending = true;
      reader.addEventListener('load', (event: any) => {

        this.selectedFile = new ImageSnippet(event.target.result, file);
        this.Select.emit(this.selectedFile);
        // this.selectedFile.pending = false;

      });
      reader.readAsDataURL(file);
    }
  }
}

