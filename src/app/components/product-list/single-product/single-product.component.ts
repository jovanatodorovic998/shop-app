import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/sahred/models/product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  @Input() allProducts!: Product[];
  @Output() addClicked = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  public add(product: Product) {
    this.addClicked.emit(product);
  }
}
