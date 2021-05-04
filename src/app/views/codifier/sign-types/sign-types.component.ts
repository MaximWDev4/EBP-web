import { Component, OnInit } from '@angular/core';

type Sign = {
  name: string,
  type: number,
  id: number
  image?: string
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
      name: 'Запрещающие'
    },
    {
      id: 3,
      name: 'Знаки приоритета'
    },
    {
      id: 4,
      name: 'Предписывающие'
    }
  ];
  selectedSigns: Sign[] = [];
  constructor() { }

  ngOnInit(): void {
    this.signs = [
      {
        name: '1.1 Железнодорожный переезд со шлагбаумом',
        type: 1,
        id: 1,
      },
      {
        name: '1.1 Железнодорожный переезд со шлагбаумом',
        type: 1,
        id: 1,
      },
      {
        name: '1.1 Железнодорожный переезд со шлагбаумом',
        type: 1,
        id: 1,
      },
      {
        name: '1.1 Железнодорожный переезд со шлагбаумом',
        type: 1,
        id: 1,
      },
      {
        name: '1.1 Железнодорожный переезд со шлагбаумом',
        type: 2,
        id: 1,
      },
      {
        name: '1.1 Железнодорожный переезд со шлагбаумом',
        type: 1,
        id: 1,
      },
      {
        name: '1.1 Железнодорожный переезд со шлагбаумом',
        type: 2,
        id: 1,
      },
      {
        name: '1.1 Железнодорожный переезд со шлагбаумом',
        type: 2,
        id: 1,
      },
    ];
    this.setSelectedSigns(1);
  }

  setSelectedSigns(typeId: number): void {
    this.selectedSigns = this.signs.filter(value => value.type === typeId);
  }
}
