import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from '../store/product.action';
import { map, mergeMap} from 'rxjs';
import { ApiService } from '../services/apiService/api.service';
import {Product} from "../models/product.model";

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getAllProducts),
      mergeMap((actions: any) =>
        this.apiService.get().pipe(
          map((response: any) => {
            return ProductActions.getAllProductsSuccess({ data: response });
          })
        )
      )
    )
  );
  getAllCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getCategories),
      mergeMap((actions: any) =>
        this.apiService.getCategories().pipe(
          map((response: any) => {
            console.log(response);
            return ProductActions.getCategoriesSuccess({ data: response });
          })
        )
      )
    )
  );
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      map((data) => {
        return ProductActions.addProductsSuccess(data);
      })
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.addProducts),
      map((action:{data:Product}) => {
        return ProductActions.addProductsSuccess(action);
      })
    )
  );
}
