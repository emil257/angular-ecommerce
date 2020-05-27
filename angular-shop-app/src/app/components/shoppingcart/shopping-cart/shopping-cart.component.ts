import { Component, OnInit } from '@angular/core';
import { IState } from 'src/app/models/istate.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public cartItems: Observable<Array<{}>>

  constructor(private store: Store<IState>, private cartService: ShoppingcartService) { }

  ngOnInit(): void {
    this.cartItems = this.store.select(store => store.shoppingcart)
  }

  totalValue() {
    return this.cartService.totalCartValue()
  }
}
