import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from '../store/product.action'
import {map, mergeMap, tap} from "rxjs";
import {ApiService} from "../services/api.service";


@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {
  }

  getAllProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.getAllPoducts),
    mergeMap((actions:any) => this.apiService.get().pipe(
      map((response:any) =>{
        console.log(response,'alo efekat')
        return ProductActions.getAllProductsSuccess({data:response});
      })
    ))
    )
  );

  deleteEmployee$ = createEffect( () =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      mergeMap((action)=> this.apiService.delete(action.data.id).pipe(
        map(response => {
          return ProductActions.deleteProductSuccess({data:action.data.id})
        })
      ))
    ))


  addEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.addProducts),
      mergeMap( (action:any) => this.apiService.add(action.data).pipe(
          map((response:any) => {
            console.log(response)
            return ProductActions.addEmployeesSuccess(response)
          })
        )
      )
    )
  );

}
