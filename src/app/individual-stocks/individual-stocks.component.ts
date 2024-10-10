import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StockService } from '../services/stock.service';
import { StocksComponent } from '../stocks/stocks.component';
import { Observable } from 'rxjs';
import { stocks } from '../model/stocks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-individual-stocks',
  templateUrl: './individual-stocks.component.html',
  styleUrl: './individual-stocks.component.css'
})
export class IndividualStocksComponent {

  

  // stocks:any;

  // constructor(private stockService:StockService,
  //   private http: HttpClient,private stocklt:StocksComponent  ) { }


  //   ngOnInit(){
    
  //     console.log(this.stocklt.stocklist.stockName);
  //     this.stockService.getStocks().subscribe( {next: (data: any) =>{
  //       console.log(data);
  //       this.stocks=data;},
  //       error: (err: any) => {console.log(err);}
  //     })
  
      
      
  //   }

  stockName: string = '';
  stock$: Observable<stocks> | null = null;

  constructor(private stockService: StockService,private router: Router) {}

  searchStock() {
    if (this.stockName) {
      this.stock$ = this.stockService.getStockByName(this.stockName);
    }
  }
  buyStock(){
    console.log();
   this.router.navigate(['/buy-sell/:action/:id/:stockName/:stockPrice']);
  }

  sellStock(){
    console.log();
   this.router.navigate(['stocksell']);
  }
 

}
