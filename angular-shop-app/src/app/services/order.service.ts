import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as OrderActions from '../store/actions/order.action'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _baseUrl: string = 'http://localhost:80/api/orders/'

  constructor(private http: HttpClient, private store: Store) { }

  get(userId) {
    let token = localStorage.getItem('token')
    this.http.get<any>(this._baseUrl + userId, { headers: { 'Authorization': 'bearer ' + token } }).subscribe(
      res => {
        this.store.dispatch(new OrderActions.Get(res))
      },
      err => { }
    )
  }
  place(order) {
    let token = localStorage.getItem('token')
    this.http.post<any>(this._baseUrl + 'add', order, { headers: { 'Authorization': 'bearer ' + token } }).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
}
