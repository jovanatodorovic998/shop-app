import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../store';
import * as ProductActions from '../store/product.action';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements OnInit {
  productsInBasket: Product[] = [];
  numberOfProductsInBasket = new BehaviorSubject<number>(0);
  number = 0;
  price = 0;
  product: any[] = [];

  constructor(private apiService: ApiService, private store: Store<State>) {}

  ngOnInit(): void {}

  add(product: Product) {
    this.pushToBasket(product);
    this.store.dispatch(ProductActions.addProducts({ data: this.product }));
  }

  remove(productId: number) {
    this.product = this.product.filter((product) => product.id !== productId);
    this.store.dispatch(
      ProductActions.deleteProductSuccess({ data: this.product })
    );
  }

  save() {
    let products = JSON.stringify(this.product);
    localStorage.setItem('products', products);
  }

  pushToBasket(product: Product) {
    this.product = Object.assign([], this.product);
    this.product.push(product);
  }
}
