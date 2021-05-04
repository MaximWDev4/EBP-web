import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-nomenclature',
  templateUrl: './nomenclature.component.html',
  styleUrls: ['./nomenclature.component.sass']
})
export class NomenclatureComponent implements OnInit {
  query: string = '';
  DZ: {name: string}[] = [
    {
      name: '2 - Высокая интенсивность - Лист стальной оцинкованный - Метод аппликации'
    },
    {
      name: '1 - Высокая интенсивность - Лист стальной неоцинкованный - Метод аппликации'
    },
    {
      name: '1 - Средняя интенсивность - Лист пластиковый - Метод аппликации'
    },
    {
      name: '3 - оч. Высокая интенсив. - Лист стальной оцинкованный - Метод шелкографии'
    },
    {
      name: '1 - Средняя интенсивность - Лист пластиковый - Метод аппликации'
    }
  ];
  DDZ: {name: string}[];
  constructor() {
    this.DDZ = this.DZ;
  }

  ngOnInit(): void {
  }

  queryChange(): void {
    this.DDZ = this.DZ.filter((item) => {
      return item.name.includes(this.query);
    });
  }
}
