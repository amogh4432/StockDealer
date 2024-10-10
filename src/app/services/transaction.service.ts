import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }

  gettrans():any{

    return this.http.get(`http://localhost:9003/portfolio/transaction`);

  }

  getsellrepo():any{

    return this.http.get(`http://localhost:9003/portfolio/sellrepo`);

  }
}
