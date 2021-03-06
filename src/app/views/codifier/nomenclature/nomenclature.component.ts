import { Component, OnInit } from '@angular/core';
import {DynamicDataService} from '../../../_servieces/dynamic-data.service';

@Component({
  selector: 'app-nomenclature',
  templateUrl: './nomenclature.component.html',
  styleUrls: ['./nomenclature.component.sass']
})
export class NomenclatureComponent implements OnInit {
  query = '';
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
  constructor(private dds: DynamicDataService) {
    this.DDZ = this.DZ;
  }

  ngOnInit(): void {
    this.dds.getGosts('1').subscribe((data: any) => console.log(data));
  }

  queryChange(): void {
    this.DDZ = this.DZ.filter((item) => {
      return item.name.includes(this.query);
    });
  }
}
