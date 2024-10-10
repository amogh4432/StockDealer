import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StocksComponent } from '../stocks/stocks.component';

@Injectable({
  providedIn: 'root'
})
export class IndividualstockserviceService {

  constructor(private http: HttpClient) { }


  getStocks(): any {
    return this.http.get(`http://localhost:9002/stock/getAll`);
  }


}
