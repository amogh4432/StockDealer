import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StocksComponent } from '../stocks/stocks.component';
import { Observable } from 'rxjs';
import { stocks } from '../model/stocks';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'http://localhost:9002/stock';
  private apiUrl1 = 'http://localhost:9003/portfolio/user/stock/buy';
  private apiUrl2 = 'http://localhost:9003/portfolio/user/stock';

  constructor(private http: HttpClient) { }

  
  getStocks(): any {
    return this.http.get(`http://localhost:9002/stock/getAll`);
  }
  
  getStockByName(stockName: string): Observable<stocks> {
    return this.http.get<stocks>(`${this.apiUrl}/${stockName}`);
  }

  buyStock(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl1, data, { headers, responseType: 'text' as 'json' });
  }
  sellStock(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl2}/sell`, data, { headers, responseType: 'text' as 'json' });
  }

  // getaStock():any{
  //   return this.http.get(`http://localhost:9002/stock/${this.stockcomp.stocklist.stockName}`)
  // }


 
  
  

 
}
