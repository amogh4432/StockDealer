import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-buysell',
  templateUrl: './buysell.component.html',
  styleUrl: './buysell.component.css'
})
export class BuysellComponent {
  buyStockForm: FormGroup;

  constructor(private fb: FormBuilder, private stockService: StockService) {
    this.buyStockForm = this.fb.group({
      stockQuantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
      stockId: [6, Validators.required], // Prefill with stockId
      userId: [1, Validators.required] // Prefill with userId
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.buyStockForm.valid) {
      this.stockService.buyStock(this.buyStockForm.value)
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
