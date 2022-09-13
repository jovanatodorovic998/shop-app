import {createAction, props} from "@ngrx/store";


export  const getAllPoducts = createAction(
  '[Products] Get all products',

)

export  const getAllProductsSuccess = createAction(
  '[Products] Get all products products success',
  props<{ data:any[] }>()
)

export  const getAllProductsFailure = createAction(
  '[Products] Get all users products failure',
  props<{ error: any }>()
)


export  const deleteProduct = createAction(
  '[Product] Delete product',
  props<{ data: any }>()
)

export  const deleteProductSuccess = createAction(
  '[Product] Delete product success',
  props<{ data:number }>()
)

export  const deleteProductFailure = createAction(
  '[Product] Delete product failure',
  props<{ error: any }>()
)

export const addProducts = createAction(
  '[Products] Add products',
  props<{ data: any }>()
)

export const addEmployeesSuccess = createAction(
  '[Products] Add products success',
  props<{ user: any }>()
)

export const addEmployeesFailure = createAction(
  '[Products] Add products failure',
  props<{ error: any }>()
)
