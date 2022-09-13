import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../sahred/services/products.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  numOfProducts =0;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.numberOfProductsInBasket.subscribe((data)=>{
      this.numOfProducts = data
    })
  }

}
