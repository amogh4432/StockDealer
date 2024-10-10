import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { StocksComponent } from './stocks/stocks.component';
import { IndividualStocksComponent } from './individual-stocks/individual-stocks.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { BuysellComponent } from './buysell/buysell.component';
import { StocksellComponent } from './stocksell/stocksell.component';
import { AuthserviceService } from './authservice.service';


const routes: Routes = [
  
  { path: 'login',component:LoginComponent},
  // {path:'**',redirectTo:'login'},
  // {path:'logout',component:LoginComponent},
  { path: 'register',component: RegisterComponent},
  { path: 'stocks',component:StocksComponent},
  { path: 'home',component:HomeComponent},
  // {path:'buysell',component:BuysellComponent},
  { path: 'buy-sell/:action/:id/:stockName/:stockPrice', component: BuysellComponent },
  {path:'stocksell',component:StocksellComponent},
  {path: 'individual-stocks',component:IndividualStocksComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'portfolio',component:PorfolioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
