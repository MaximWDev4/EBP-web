import {Injectable} from '@angular/core';
import {UrlService} from './url.service';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class StaticDataService{
  constructor(private http: HttpClient) {
  }
  getGost(): Observable<any>{
    return this.http.get(UrlService.gost).pipe(map(gosts => gosts));
  }
  getTiporaz(): Observable<any>{
    return  this.http.get(UrlService.tiporaz).pipe(map(tiporaz => tiporaz));
  }
  getKrepl(): Observable<any>{
    return this.http.get(UrlService.krepl).pipe(map(krepl => krepl));
  }
  getRoles(): Observable<any>{
    return this.http.get(UrlService.roles).pipe(map(roles => roles));
  }
  getSkin(): Observable<any>{
    return this.http.get(UrlService.skin).pipe(map(skin => skin));
  }

  getConfig(): Observable<any> {
    return this.http.get(UrlService.config).pipe(map(skin => skin));
  }
}
