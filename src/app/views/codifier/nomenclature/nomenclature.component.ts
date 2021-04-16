import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nomenclature',
  templateUrl: './nomenclature.component.html',
  styleUrls: ['./nomenclature.component.sass']
})
export class NomenclatureComponent implements OnInit {
  DZ = [
    {
      name: '1'
    },
    {
      name: '2'
    },
    {
      name: '3'
    },
    {
      name: '4'
    },
    {
      name: '5'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
