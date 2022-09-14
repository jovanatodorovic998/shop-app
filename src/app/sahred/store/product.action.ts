import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const getAllPoducts = createAction('[Products] Get all products');

export const getAllProductsSuccess = createAction(
  '[Products] Get all products products success',
  props<{ data: Product[] }>()
);

export const getAllProductsFailure = createAction(
  '[Products] Get all users products failure',
  props<{ error: any }>()
);

export const deleteProduct = createAction(
  '[Product] Delete product',
  props<{ data: any }>()
);

export const deleteProductSuccess = createAction(
  '[Product] Delete product success',
  props<{ data: Product[] }>()
);

export const deleteProductFailure = createAction(
  '[Product] Delete product failure',
  props<{ error: any }>()
);

export const addProducts = createAction(
  '[Products] Add products',
  props<{ data: any[] }>()
);

export const addProductsSuccess = createAction(
  '[Products] Add products success',
  props<{ data: Product[] }>()
);

export const addProductsFailure = createAction(
  '[Products] Add products failure',
  props<{ error: any }>()
);

export const getCategories = createAction('[Products] Get categories');

export const getCategoriesSuccess = createAction(
  '[Products] Get categories success',
  props<{ data: string[] }>()
);

export const getCategoriesFailure = createAction(
  '[Products] Get categories failure',
  props<{ error: any }>()
);
