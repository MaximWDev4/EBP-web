import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class DynamicDataService {
  constructor(private http: HttpClient) {
  }

  getPassports(): Observable<any> {
    let params = new HttpParams();
    params = params.append('passports-get', '');
    console.log(params);
    return this.http.get(environment.apiUrl, { params } ).pipe(map(data => data));
  }
  getGosts(type: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('gosts-get', '');
    params = params.append('type', type);
    console.log(params);
    return this.http.get(environment.apiUrl, { params } ).pipe(map(data => data));
  }
}
