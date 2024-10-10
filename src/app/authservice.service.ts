import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from './model/LoginData';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private loginUrl = 'http://localhost:9001/user/login';
  private accessTokenKey = 'accessToken';

  constructor(private http: HttpClient) {}

  login(loginData: LoginData): Observable<any> {
    return this.http.post(this.loginUrl, loginData).pipe(
      tap((response: any) => {
        localStorage.setItem(this.accessTokenKey, response.accessToken);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.accessTokenKey);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }
}
