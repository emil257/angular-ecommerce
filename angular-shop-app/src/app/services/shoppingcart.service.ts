import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ShoppingCartActions from '../store/actions/shoppingcart.actions'
import { IState } from '../models/istate.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor(private store: Store<IState>) { }

  add(product) {
    this.store.dispatch(new ShoppingCartActions.Add(product))
  }
  remove(id) {
    this.store.dispatch(new ShoppingCartActions.Remove(id))
  }
  changeQnt(id, incdec) {
    this.store.dispatch(new ShoppingCartActions.ChangeQnt({ id, incdec }))
  }

  totalItems() {
    let cart

    let total = 0

    this.store.select(store => store.shoppingcart).subscribe(res => cart = res)

    cart.map(item => {
      total += item.quantity
    })

    if (total === 0)
      return ''
    return total
  }

  totalCartValue() {
    let totalRes

    let totalValue = 0

    this.store.select(store => store.shoppingcart).subscribe(res => totalRes = res)

    totalRes.map(item => {
      totalValue += (item.quantity * item.product.price)
    })

    return totalValue
  }
  clear() {
    this.store.dispatch(new ShoppingCartActions.Clear())
  }
}
