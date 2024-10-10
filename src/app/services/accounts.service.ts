import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ApiResponse } from '../types/type';
import { HttpResponse } from '@angular/common/http';
 
 
export interface LoginRequest {
    username:string
    password: string
}
 
export interface LoginResponse{
    accessToken:string
    tokenType:string
}
export interface RegisteRequest{
    email:string
    username:string
    password: string
}
export interface RegisterResponse{
    email:string
    name:string
   
    password:string
}
 
@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private apiService: ApiService) {}
 
  authenticate = ({
    username,
    password,
  }: LoginRequest) => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    return this.apiService.post<HttpResponse<LoginResponse>>(
      `http://localhost:9001/user/login`,
      { username, password },
      { observe: 'events' },
    );
  };
 
  register = ({
    email,
    username,
    password,
  }: RegisteRequest) => {
    return this.apiService.post<HttpResponse<RegisterResponse>>(
      `http://localhost:8086/api/users/register`,
      { email, username, password },
      { observe: 'events' },
    );
  };
}