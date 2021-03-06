import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, map, mapTo, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';
// import { Tokens } from '../_models/tokens';
// import { Common } from '../_helpers/common.helper';

export interface User {
  id: string;
  userName: string;
  email: string;
  password: string;
  license?: string;
}
export interface RegUser {
  emailreg: string;
  passwordreg: string;
}



@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  public lastError = '';
  public userName = '';
  public name = '';

  constructor(private http: HttpClient) {}


  loginUser(user: User): any {
    console.log(environment.apiUrl);
    return this.http.post<any>(`${environment.apiUrl}/auth/email/login`,
      {email: user.email, password: user.password})
      .pipe(
        tap(data => {
          if (data.success) {
            this.storeuserName(data.data.user.userName);
            this.storeLicence(data.data.user.licence);
            this.storeJwtToken(data.data.token.access_token);
            this.storeRefreshToken(data.data.refreshToken);
          }
        }),
      );
  }

  registerUser(regData: any): any {
    return this.http.post<any>(`${environment.apiUrl}/auth/email/register`,
      { userName: regData.name, email: regData.email, password: regData.password }).pipe(
      map(data => data)
    );
  }

  // conformEmail(token: any): any {
  //   return this.http.get<any>(`${environment.apiUrl}/auth/email/verify/${token}`, ).pipe(
  //     map(data => data)
  //   );
  // }
  //
  // resetPassword(regData: any): any {
  //   return this.http.post<any>(`${environment.apiUrl}/auth/password-reset`,
  //     { userName: regData.userName.value}).pipe(
  //     map(data => data)
  //   );
  // }

  // getUserDetails(): any {
  //   return this.http.get<any>(`${environment.apiUrl}/auth/details`)
  //     .pipe(map(userObj => {
  //       return userObj;
  //     }));
  // }

  getUserLicence(): any {
    return localStorage.getItem('licence');
  }

  // doLoginUser(tokens: Tokens): any {
  //   this.storeTokens(tokens);
  // }

  isLoggedIn(): boolean {
    return true;
  //   const jwt = this.getJwtToken();
  //   return !Common.isEmpty(jwt);
  }

  // hasProfile(): any {
  //   const hasProfile = localStorage.getItem('hasProfile');
  //   if (!Common.isEmpty(hasProfile)) {
  //     return JSON.parse(hasProfile);
  //   }
  //   return false;
  // }

  // refreshToken(): any {
  //   return this.http.post<any>(`${environment.apiUrl}/token/refresh`, {refreshToken: this.getRefreshToken()})
  //     .pipe(tap((tokens: Tokens) => {
  //       this.storeJwtToken(tokens.jwt);
  //     }));
  // }

  // getJwtToken(): any {
  //   const jwt = localStorage.getItem(this.JWT_TOKEN);
  //   if (!Common.isEmpty(jwt)) {
  //     // const parts = jwt.split('.');
  //     // const jsonPayload = this.urlSafeBase64Decode(parts[1]);
  //     const payload: any = jwt_decode(jwt, {header: false});
  //     // const payload = JSON.parse(jsonPayload);
  //     this.userName = payload.userName;
  //     this.name = payload.name;
  //   }
  //   return jwt;
  // }

  // urlSafeBase64Decode(input: string): any {
  //   const remainder = input.length % 4;
  //   if (remainder) {
  //     const padLength = 4 - remainder;
  //     input += '='.repeat(padLength);
  //   }
  //   return atob(input);
  // }

  getRefreshToken(): any {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  storeJwtToken(jwt: string): any {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  storeRefreshToken(refreshToken: string): any {
    localStorage.setItem(this.REFRESH_TOKEN, refreshToken);
  }

  storeLicence(licence: any): any {
    localStorage.setItem('licence', licence);
  }

  storeuserName(userName: string): any {
    localStorage.setItem('userName', userName);
  }

  // private storeTokens(tokens: Tokens): any {
  //   localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
  //   localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  // }

  private removeTokens(): any {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

  logoutUser(): any {
    this.name = '';
    this.userName = '';
    this.removeTokens();
    localStorage.removeItem('roles');
    localStorage.removeItem('userName');
    localStorage.removeItem('hasProfile');
  }
}
