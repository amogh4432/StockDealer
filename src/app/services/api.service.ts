import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { DeleteOptions, Options, PostOptions } from'../types/type';
 
 
@Injectable({
  providedIn: 'root',
})
export class ApiService {
 
  private url = ""
 
  constructor(private http: HttpClient) {}
 
  get<T>(endpoint: string, options: Options): Observable<T> {
    return this.http.get<T>(this.url+endpoint, options) as Observable<T>;
  }
 
  post<T>(endpoint:string, body: any | null, options: PostOptions) : Observable<T> {
    return this.http.post<T>(this.url+endpoint, body, options) as Observable<T>;
  }
 
  delete<T>(endpoint: string, options: DeleteOptions): Observable<T> {
    return this.http.delete<T>(this.url+endpoint, options) as Observable<T>;
  }
 
  patch<T>(endpoint: string, options: Options): Observable<T> {
    return this.http.patch<T>(this.url+endpoint, options) as Observable<T>;
  }
}