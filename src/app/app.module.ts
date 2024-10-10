import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BuysellComponent } from './buysell/buysell.component';
import { StocksComponent } from './stocks/stocks.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { IndividualStocksComponent } from './individual-stocks/individual-stocks.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { StockPopupComponent } from './stock-popup/stock-popup.component';
import { StocksellComponent } from './stocksell/stocksell.component';
import { AuthserviceService } from './authservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BuysellComponent,
    StocksComponent,
    IndividualStocksComponent,
    TransactionComponent,
    PorfolioComponent,
    StockPopupComponent,
    StocksellComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
