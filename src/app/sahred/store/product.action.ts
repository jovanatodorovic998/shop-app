import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

//GET PRODUCT ACTIONS
export const getAllProducts = createAction('[Products] Get all products');

export const getAllProductsSuccess = createAction(
  '[Products] Get all products products success',
  props<{ data: Product[] }>()
);

export const getAllProductsFailure = createAction(
  '[Products] Get all users products failure',
  props<{ error: any }>()
);

//DELETE PRODUCT ACTIONS
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

//ADD PRODUCT ACTIONS
export const addProducts = createAction(
  '[Products] Add products',
  props<{ data: Product }>()
);

export const addProductsSuccess = createAction(
  '[Products] Add products success',
  props<{ data: Product }>()
);

export const addProductsFailure = createAction(
  '[Products] Add products failure',
  props<{ error: any }>()
);

//GET PRODUCT CATEGORIES ACTIONS
export const getCategories = createAction('[Products] Get categories');

export const getCategoriesSuccess = createAction(
  '[Products] Get categories success',
  props<{ data: string[] }>()
);

export const getCategoriesFailure = createAction(
  '[Products] Get categories failure',
  props<{ error: any }>()
);
