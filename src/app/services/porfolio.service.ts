import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  private apiUrl = 'http://localhost:9003/portfolio/showportfoli';

  constructor(private http: HttpClient, private authService: AuthserviceService) {}

  getPortfolioByUserId(userId: number): any {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getAccessToken()}`
    });

    return this.http.post(`${this.apiUrl}/${userId}`, { headers });
  }
}

