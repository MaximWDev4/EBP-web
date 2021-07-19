import { Component, OnInit } from '@angular/core';
import {DynamicDataService} from '../../../_servieces/dynamic-data.service';
import {environment} from '../../../../environments/environment';

type Sign = {
  name: string,
  type: number,
  id: number
  icon?: string
};

type SignType = {
  id: number,
  name: string
};


@Component({
  selector: 'app-sign-types',
  templateUrl: './sign-types.component.html',
  styleUrls: ['./sign-types.component.sass']
})
export class SignTypesComponent implements OnInit {
  signs: Sign[] = [];
  public signTypes: SignType[] = [
    {
      id: 1,
      name: 'Предупреждающие'
    },
    {
      id: 2,
      name: 'Приоритета'
    },
    {
      id: 3,
      name: 'Запрещающие'
    },
    {
      id: 4,
      name: 'Предписывающие'
    },
    {
      id: 5,
      name: 'Информационно-указательные'
    },
    {
      id: 6,
      name: 'Сервиса'
    },
    {
      id: 7,
      name: 'Дополнительной информации'
    }
  ];
  selectedSigns: Sign[] = [];
  baseurl = environment.apiUrl;
  constructor(private dds: DynamicDataService) { }

  ngOnInit(): void {
    this.signs = [];
    this.setSelectedSigns('1');
  }

  setSelectedSigns(typeId: string): void {
    this.dds.getGosts(typeId).subscribe((data: any) => {
      console.log(data);
      this.signs = data;
      this.selectedSigns = this.signs.filter(value => value.type === +typeId);
    });
  }
}
