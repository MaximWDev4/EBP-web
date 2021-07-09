import { Component, OnInit } from '@angular/core';
import {IManufacture} from './interfaces';

@Component({
  selector: 'app-manufacture',
  templateUrl: './manufacture.component.html',
  styleUrls: ['./manufacture.component.sass']
})
export class ManufactureComponent implements OnInit {
  query = '';
  manufacture: IManufacture[] = [
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
  DManufacture: IManufacture[];
  constructor() {
    this.DManufacture = this.manufacture;
  }

  ngOnInit(): void {
  }

  queryChange(): void {
    this.DManufacture = this.manufacture.filter((item) => {
      return item.name.includes(this.query);
    });
  }
}
