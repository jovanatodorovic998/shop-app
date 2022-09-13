import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../sahred/services/api.service";
import {ProductsService} from "../../sahred/services/products.service";
import {select, Store} from "@ngrx/store";
import {State} from "../../sahred/store";
import {getAllPoducts} from "../../sahred/store/product.action";
import {getAllProducts} from "../../sahred/store/product.selectors";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   public allProducts:any;

   constructor(private apiService: ApiService, private store: Store<State>) { }

  ngOnInit(): void {
    this.store.pipe(select(getAllProducts)).subscribe(data=>{
      this.allProducts =data;
    })

  }




}
