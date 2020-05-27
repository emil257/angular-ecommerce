import { Component, OnInit, Input } from '@angular/core';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-shopping-cart-product',
  templateUrl: './shopping-cart-product.component.html',
  styleUrls: ['./shopping-cart-product.component.css']
})
export class ShoppingCartProductComponent implements OnInit {

  @Input() item

  constructor(private cartService: ShoppingcartService) { }

  ngOnInit(): void {
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
}
