import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopUpService {
  boxText = document.createElement('div');

  constructor() { }

  makePopup(data: any, onClick: () => void): HTMLElement {
    const content =  document.createElement('div');
    content.innerHTML = `<div>Capital: ${data.name}</div>
                             <div>State: ${data.state}</div>`;
    const button = document.createElement('button');
    button.innerText = data.population;
    button.addEventListener('click', onClick);
    content.appendChild(button);
    return content;
  }
}
