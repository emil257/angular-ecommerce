import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store'
import * as demo from '../data/demo'
import * as ProductCatalogActions from '../store/actions/product-catalog.actions'

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {

  private _baseUrl: string = 'http://localhost:80/api/products/'

  constructor(private http: HttpClient, private store: Store) { }

  get() {
    this.http.get<any>(this._baseUrl).subscribe(
      res => this.store.dispatch(new ProductCatalogActions.Set(res)),
      err => this.getDemoData()
    )
  }

  clear() {
    this.store.dispatch(new ProductCatalogActions.Clear())
  }
  getDemoData() {
    this.store.dispatch(new ProductCatalogActions.Set(demo.productCatalog))
  }
}
