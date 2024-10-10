import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {

  transaction:any;

  sellrepo:any


  constructor(private trans:TransactionService,
    private http: HttpClient) { }

  ngOnInit(){
    this.trans.gettrans().subscribe( {next: (data: any) =>{
      console.log(data);
      this.transaction=data;},
      error: (err: any) => {console.log(err);}
    })

    this.trans.getsellrepo().subscribe( {next: (data: any) =>{
      console.log(data);
      this.sellrepo=data;},
      error: (err: any) => {console.log(err);}
    })

}

}