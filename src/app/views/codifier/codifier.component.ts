import { Component, OnInit } from '@angular/core';
import {RouteMap, RoutingMap} from '../../_helpers/routing-map';

@Component({
  selector: 'app-codifier',
  templateUrl: './codifier.component.html',
  styleUrls: ['./codifier.component.sass']
})
export class CodifierComponent implements OnInit {
  subRoutingMap?: RouteMap[] = RoutingMap.codifier.subroutes;
  constructor() { }

  ngOnInit(): void {
  }

}
