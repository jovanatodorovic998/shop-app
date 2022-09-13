import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../../sahred/services/products.service";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() allProducts:any;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }
  add(product:any){
    this.productService.addToBasket(product);

  }
}
