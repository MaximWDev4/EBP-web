import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import {PopUpService} from './popup.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(private http: HttpClient, private popupService: PopUpService) { }

  onMarkerClick(router: Router): void {
    console.log('popup click');
    router.navigate(['/home']);
  }
  makeSignMarkers(map: L.Map | undefined, router: Router): void {
    if (map) {
      this.http.get(this.capitals).subscribe((res: any) => {
        for (const c of res.features) {
          const lon = c.geometry.coordinates[0];
          const lat = c.geometry.coordinates[1];
          const circle = L.circleMarker([lat, lon]);
          circle.bindPopup(this.popupService.makePopup(c.properties, () => this.onMarkerClick(router)));
          circle.addTo(map);
        }
      });
    }
  }
  makeObjMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);

        marker.addTo(map);
      }
    });
  }

}
