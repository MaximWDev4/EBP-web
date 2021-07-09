import { Component, OnInit } from '@angular/core';
import {Material} from './interfaces';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.sass']
})
export class MaterialComponent implements OnInit {
  query = '';
  materials: Material[] = [];
  selectedMaterials: Material[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  queryChange(): void {

  }
}
