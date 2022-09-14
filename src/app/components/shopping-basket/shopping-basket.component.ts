import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/sahred/models/product.model';
import { State } from 'src/app/sahred/store';
import {
  getProductsInBAsket,
  numberOfProductsInBasket,
  priceOfProductsInBasket,
} from 'src/app/sahred/store/product.selectors';
import { ProductsService } from '../../sahred/services/productsService/products.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss'],
})
export class ShoppingBasketComponent implements OnInit {
  public productsInBasket: Product[] = [];
  public savedProducts!: Product[];
  public allProductsInBasket!: Product[];
  public isSaved!: boolean;
  public numOfProducts$!: Observable<number>;
  public priceOfProducts$!: Observable<number>;

  constructor(
    private productService: ProductsService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.store.pipe(select(getProductsInBAsket)).subscribe((data) => {
      this.productsInBasket = data;
      this.getSavedProducts();
      if (this.savedProducts) {
        this.allProductsInBasket = this.productsInBasket.concat(
          this.savedProducts
        );
        this.productsInBasket = this.allProductsInBasket;
      }
    });

    this.numOfProducts$ = this.store.pipe(select(numberOfProductsInBasket));
    this.priceOfProducts$ = this.store.pipe(select(priceOfProductsInBasket));
  }

  public remove(productId: number) {
    this.productService.remove(productId);
  }

  public save() {
    this.isSaved = true;
    this.productService.save();
  }

  public getSavedProducts() {
    this.savedProducts = JSON.parse(localStorage.getItem('products')!);
  }
}
