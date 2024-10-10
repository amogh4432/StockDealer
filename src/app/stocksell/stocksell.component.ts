import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stocksell',
  templateUrl: './stocksell.component.html',
  styleUrl: './stocksell.component.css'
})
export class StocksellComponent {
  sellStockForm: FormGroup;

  constructor(private fb: FormBuilder, private stockService: StockService) {
    this.sellStockForm = this.fb.group({
      stockQuantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
      stockId: [6, Validators.required], // Prefill with stockId
      userId: [1, Validators.required] // Prefill with userId
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.sellStockForm.valid) {
      this.stockService.sellStock(this.sellStockForm.value)
        .subscribe(
          response => {
            console.log('Success', response);
            alert(response);
          },
          error => {
            console.error('Error', error);
          }
        );
    }
  }
}
