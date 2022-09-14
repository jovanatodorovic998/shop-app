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
  public isFilterTypeByTitle = true;

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
    this.isFilterTypeByTitle =true;
    const searchWord = this.searchWord;
    if (searchWord === '') {
      this.allProducts = this.originalArray;
      return;
    }
    this.filter(searchWord)

  }

  public filterByCategory() {
    this.isFilterTypeByTitle =false
    const categoryValue = this.filterOption;
    this.allProducts = this.originalArray;
    if (this.filterOption === undefined) {
      return;
    }
    this.filter(categoryValue);
  }

  private getCategories() {
    this.store.dispatch(getCategories());
  }

  public onAddToBasket(product: any) {
    this.productService.add(product);
  }

  filter(searchWord:string){
    const searchBy = this.isFilterTypeByTitle ?  'title' : 'category';
    this.allProducts = this.allProducts.filter((item: Product) => {
      return item[searchBy]
        .toLowerCase()
        .includes(searchWord.trim().toLocaleLowerCase());
    });
  }
}
