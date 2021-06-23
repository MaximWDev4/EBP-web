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
}
