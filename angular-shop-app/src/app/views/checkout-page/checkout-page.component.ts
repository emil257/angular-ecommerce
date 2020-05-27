import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  public cartItems: Observable<Array<{}>>
  public order: any
  public data

  constructor(private store: Store<IState>, private cartService: ShoppingcartService, private userService: UserService, private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.userService.loadUser()
    this.store.select(store => store.user).subscribe(res => this.data = res)
    this.store.select(store => store.shoppingcart).subscribe(res => this.order = res)
    this.cartItems = this.store.select(store => store.shoppingcart)
  }

  removeItem(id) {
    this.cartService.remove(id)
  }
  incQnt(id) {
    this.cartService.changeQnt(id, +1)
  }
  decQnt(id) {
    this.cartService.changeQnt(id, -1)
  }

  placeOrder() {
    if (!this.data.isLoggedIn && this.data.loaded)
      this.router.navigate(['profile/login'])
    else {
      this.orderService.place({
        userId: this.data.user._id,
        orderTotal: this.cartService.totalCartValue(),
        order: this.order
      })
      this.cartService.clear()
      this.router.navigate(['profile'])
    }
  }

  totalValue() {
    return this.cartService.totalCartValue()
  }
}
