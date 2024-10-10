import { Component } from '@angular/core';
import { stocks } from './model/stocks';
import { StockService } from './services/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stockdealer';

  constructor(private stockService: StockService, private router: Router) {}
  navigateToBuySell(action: string, stock: stocks) {
    this.router.navigate(['/buysell', action, stock.id, stock.stockName, stock.stockPrice]);
  }
}
