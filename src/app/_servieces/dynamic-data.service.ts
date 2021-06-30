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
    params = params.append('passports_get', '');
    console.log(params);
    return this.http.get(environment.apiUrl, { params } ).pipe(map(data => data));
  }
}
