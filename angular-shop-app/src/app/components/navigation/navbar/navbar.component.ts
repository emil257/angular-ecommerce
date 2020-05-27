import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public total: any

  constructor(private cartService: ShoppingcartService, private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.select(store => store.shoppingcart).subscribe(res => this.total = res)
  }
  onEvent(event) {
    event.stopPropagation();
  }


  totalCart() {
    return this.cartService.totalItems()
  }
}
