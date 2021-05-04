import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import * as L from 'leaflet';

import {MarkerService} from '../../_servieces/marker.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {LatLng, LatLngLiteral, LatLngTuple} from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  private routeSubscription: Subscription | undefined;
  // @ts-ignore
  private map: L.Map;
  private x = 0;
  private y = 0;
  private zoom = 0;

  private initMap(center: LatLng | LatLngLiteral | LatLngTuple | undefined, zoom: number): void {
    const container = L.DomUtil.get('#map');
    if (container == null) {
      this.map = L.map('map', {
        center,
        zoom
      });
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      tiles.addTo(this.map);
    }
  }
  constructor(private markerService: MarkerService,
              private router: Router,
              private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      // this.currentPage = +this.route.snapshot.paramMap.get('currentPage');
      const x = this.route.snapshot.paramMap.get('x');
      const y = this.route.snapshot.paramMap.get('y');
      const zoom = this.route.snapshot.paramMap.get('zoom');
      if (this.route.snapshot.paramMap.keys.length !== 0) {
      }
      else if (x && y && zoom) {
        this.x = +x;
        this.y = +y;
        this.zoom = +zoom;
      }
    });
  }

  ngAfterViewInit(): void {
    this.initMap([this.x, this.y], this.zoom);
    this.markerService.makeSignMarkers(this.map, this.router);
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
