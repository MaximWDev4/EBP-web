import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class UrlService {
  static get config(): string {
    return environment.apiUrl + '?config';
  };
  static get gost(): string {
    return environment.apiUrl + '?gost';
  }
  static get tiporaz(): string {
    return environment.apiUrl + '?tiporaz';
  }
  static get krepl(): string {
    return environment.apiUrl + '?kr';
  }
  static get save(): string {
    return environment.apiUrl + '?save';
  }
  static get roles(): string {
    return environment.apiUrl + '?roles';
  }
  static get auth(): string {
    return environment.apiUrl + '?auth';
  }
  static get foto(): string {
    return environment.apiUrl + '?foto';
  }
  static get objtype(): string {
    return environment.apiUrl + '?menu&type=622';
  }
  static get saveobj(): string {
    return environment.apiUrl + '?save-obj';
  }
  static get fotoobj(): string {
    return environment.apiUrl + '?foto-obj';
  }
  static get vidr(): string {
    return environment.apiUrl + '?vidr';
  }
  static get skin(): string {
    return environment.apiUrl + '?tip-plnk';
  }
}
