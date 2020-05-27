import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct.model';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';

@Component({
  selector: 'app-product-card-deck',
  templateUrl: './product-card-deck.component.html',
  styleUrls: ['./product-card-deck.component.css']
})
export class ProductCardDeckComponent implements OnInit {

  public productcatalog: Observable<Array<IProduct>>

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    this.productcatalog = this.store.select(store => store.productcatalog)
  }
}
