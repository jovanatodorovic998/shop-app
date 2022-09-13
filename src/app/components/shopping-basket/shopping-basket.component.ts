import { Component, OnInit } from '@angular/core';
import {Product, ProductsService} from "../../sahred/services/products.service";

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {
  public productsInBasket : Product[] = [];
  public numberOfProductsInCart= 0;
  public price!:number;
  savedProducts!:any;
  isSaved!:boolean;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.savedProducts = JSON.parse(localStorage.getItem('products')!);
   if (this.savedProducts){
     this.productsInBasket = this.savedProducts;
     return;
   }
   this.productsInBasket = this.productService.productsInBasket;
   this.productService.numberOfProductsInBasket.subscribe((data)=>{
     this.numberOfProductsInCart = data
   })
    this.price = this.productService.price;
  }

  remove(productId: number){
    this.productsInBasket = this.productsInBasket.filter((product) => product.id !== productId)
    this.productService.numberOfProductsInBasket.next(this.productsInBasket.length);
}
  save(productsInBasket:Product[]){
    this.isSaved =true;
    let products= JSON.stringify(productsInBasket)
    localStorage.setItem('products',products);
  }



}
