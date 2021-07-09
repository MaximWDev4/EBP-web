import { Component, OnInit } from '@angular/core';
import {StaticDataService} from '../../../_servieces/static-data.service';


export interface Skin {
  name: string;
  image: string;
}

@Component({
  selector: 'app-skin',
  templateUrl: './skin.component.html',
  styleUrls: ['./skin.component.sass']
})
export class SkinComponent implements OnInit {
  skinTypes: Skin[] = [];
  selectedSkins: Skin[] = [];
  query = '';

  constructor(private sds: StaticDataService) { }

  ngOnInit(): void {
    this.sds.getSkin().subscribe(skins => console.log(skins));
  }

  queryChange(): void {
    this.selectedSkins = this.skinTypes.filter((i: Skin) => i.name.includes(this.query));
  }
}
