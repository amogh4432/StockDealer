import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})
export class StocksComponent implements OnInit {

  stocklist={
    stockName:''
  }

    stocks:any;

  constructor(private stockService:StockService,
    private http: HttpClient,
  private router:Router) { }

  

  ngOnInit(){
    
    console.log(this.stocklist.stockName);
    this.stockService.getStocks().subscribe( {next: (data: any) =>{
      console.log(data);
      this.stocks=data;},
      error: (err: any) => {console.log(err);}
    })
    
    
  }

  buyStock(s:any){
    console.log(s);
   this.router.navigate(['/buy-sell/:action/:id/:stockName/:stockPrice']);
  }

  sellStock(s:any){
    console.log(s);
   this.router.navigate(['stocksell']);
  }
}

