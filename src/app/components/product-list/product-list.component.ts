import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../sahred/store';
import { getCategories } from '../../sahred/store/product.action';
import {
  getAllCategories,
  getAllProducts,
} from '../../sahred/store/product.selectors';
import { Observable } from 'rxjs';
import { Product } from 'src/app/sahred/models/product.model';
import { ProductsService } from 'src/app/sahred/services/productsService/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public allProducts: Product[] = [];
  public searchWord: string = '';
  private originalArray: Product[] = [];
  public filterOption = '';
  public categories$!: Observable<string[]>;

  constructor(
    private store: Store<State>,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.store.pipe(select(getAllProducts)).subscribe((data) => {
      this.allProducts = data;
      this.originalArray = data;
    });
    this.getCategories();
    this.categories$ = this.store.pipe(select(getAllCategories));
  }

  public searchByValue() {
    const searchWord = this.searchWord;
    if (searchWord === '') {
      this.allProducts = this.originalArray;
      return;
    }
    this.allProducts = this.allProducts.filter((item: Product) => {
      return item.title
        .toLowerCase()
        .includes(searchWord.trim().toLocaleLowerCase());
    });
  }

  public filter() {
    this.allProducts = this.originalArray;
    if (this.filterOption === undefined) {
      return;
    }
    this.allProducts = this.allProducts.filter((item: Product) => {
      return item.category
        .toLowerCase()
        .includes(this.filterOption.trim().toLocaleLowerCase());
    });
  }

  private getCategories() {
    this.store.dispatch(getCategories());
  }

  public onAddToBasket(product: any) {
    this.productService.add(product);
  }
}
