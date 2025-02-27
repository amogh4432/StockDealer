import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:9001/user/create';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
