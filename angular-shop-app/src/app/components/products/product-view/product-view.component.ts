import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IState } from 'src/app/models/istate.model';
import { Store } from '@ngrx/store';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  public product: IProduct

  constructor(private router: ActivatedRoute, private productService: ProductService, private store: Store<IState>, private cartService: ShoppingcartService) { }

  ngOnInit(): void {
    this.productService.clear()
    this.productService.getById(this.router.snapshot.params.id)
    this.store.select(store => store.product).subscribe(res => this.product = res)
  }

  addToCart(product) {
    this.cartService.add(product)
  }
}
