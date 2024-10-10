import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { PorfolioService } from '../services/porfolio.service';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrl: './porfolio.component.css'
})
export class PorfolioComponent {

  portfolio: any;

  constructor(
    private portfolioService: PorfolioService,
    private authService: AuthserviceService
  ) {}

  ngOnInit(): void {
    this.loadPortfolio();
  }

  private loadPortfolio(): void {
    const userId = this.extractUserIdFromToken();
    if (userId) {
      this.portfolioService.getPortfolioByUserId(userId).subscribe({
        next: (data: any) => {
          console.log(data);
          this.portfolio = data;
        },
        error: (err: any) => {
          console.error('Error fetching portfolio:', err);
        }
      });
    } else {
      console.error('User ID not found in token.');
      // Handle the case where user ID is not found, perhaps redirect or show an error
    }
  }

  private extractUserIdFromToken(): number | null {
    const token = this.authService.getAccessToken();

    if (!token) {
      console.error('No access token found.');
      return null;
    }

    try {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      return tokenPayload.sub; // Assuming 'sub' holds the user ID in your JWT payload
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}