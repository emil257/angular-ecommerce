import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrderService, private store: Store<IState>) { }

  public orders
  public user

  ngOnInit(): void {
    this.store.select(store => store.order).subscribe(res => this.orders = res.orders)
    this.store.select(store => store.user).subscribe(res => this.user = res)
    this.orderService.get(this.user.user._id)
  }
}
