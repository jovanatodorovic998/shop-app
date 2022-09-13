import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject} from "rxjs";

export interface Product{
  category: string;
  description:string;
  id:number;
  image:string;
  price: number;
  rating: {
    rate:number;
    count:number;
  };
  title:string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsInBasket: Product[] = [];
  numberOfProductsInBasket = new BehaviorSubject<number>(0);
  number = 0;
  price = 0;
  constructor(private apiService: ApiService) { }


  addToBasket(product:Product){
    this.productsInBasket.push(product)
    this.numberOfProductsInBasket.next(this.productsInBasket.length)
    this.price = this.price+product.price;
    console.log(this.price)
  }

  remove(productId: number){
    this.productsInBasket = this.productsInBasket.filter((product) => product.id !== productId)
  }


}
