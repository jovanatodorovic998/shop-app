import {createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import * as ProductActions from '../store/product.action';

export const productsFeatureKey = 'products';

export interface ProductsState extends EntityState<any> {
  products: any[];
  productsInBasket: any[];
  error: any;
  isTrue: boolean;
  categories: any[];
}

export const adapter: EntityAdapter<any> = createEntityAdapter();

export const initialState: any = adapter.getInitialState({
  products: undefined,
  error: undefined,
  isTrue: false,
  productsInBasket: [],
  categories: [],
});

export const productReducer = createReducer(
  initialState,
  on(ProductActions.getAllProducts, (state) => ({...state,})),

  on(ProductActions.getAllProductsSuccess, (state, {data}) => {
    return adapter.addMany(data, {
      ...state,
      products: data,
      isTrue: true,
    });
  }),
  on(ProductActions.getAllProductsFailure, (state, {error}) => ({
    ...state,
    products: undefined,
    error: error,
  })),
  on(ProductActions.deleteProductSuccess, (state, {data}) => ({
    ...state,
    products: undefined,
    productsInBasket: data,
    error: undefined,
  })),
  on(ProductActions.addProducts, (state) => ({
    ...state,
  })),
  on(ProductActions.addProductsSuccess, (state, {data}) => ({
    ...state,
    productsInBasket: [...state.productsInBasket, data],
  })),
  on(ProductActions.addProductsFailure, (state, {error}) => ({
    ...state,
    products: undefined,
    error: error,
    productsInBasket: undefined,
  })),
  on(ProductActions.getCategories, (state) => ({
    ...state,
  })),
  on(ProductActions.getCategoriesSuccess, (state, {data}) => ({
    ...state,
    categories: data,
  })),
  on(ProductActions.addProductsFailure, (state, {error}) => ({
    ...state,
    categories: undefined,
    error: error,
  }))
);

export const {selectAll} = adapter.getSelectors();
