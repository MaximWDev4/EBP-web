import { Component, OnInit } from '@angular/core';
import {Material} from '../material/interfaces';
import {IManufacture} from '../manufacture/interfaces';
import {Config} from './interfaces';
import {StaticDataService} from '../../../_servieces/static-data.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.sass']
})
export class ConfigComponent implements OnInit {

  query = '';
  configs: Config[] = [];
  selectedConfigs: Config[] = [];

  constructor(private sds: StaticDataService) {
  }

  ngOnInit(): void {
    this.sds.getConfig().subscribe((configs) => {
      console.log(configs);
      this.configs = configs;
      this.selectedConfigs = this.configs;
    });
  }

  queryChange(): void {
    this.selectedConfigs = this.configs.filter((item) => {
      return item.name.includes(this.query);
    });
  }
}
