import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProducts from './product.reducer';
import { productsFeatureKey } from './product.reducer';

export const selectorProductState =
  createFeatureSelector<any>(productsFeatureKey);

export const getAllProducts = createSelector(
  selectorProductState,
  fromProducts.selectAll
);

export const getProductsInBAsket = createSelector(
  selectorProductState,
  (state) => state.productsInBasket
);

export const numberOfProductsInBasket = createSelector(
  selectorProductState,
  (state) => state.productsInBasket.length
);

export const getAllCategories = createSelector(
  selectorProductState,
  (state) => state.categories
);

export const priceOfProductsInBasket = createSelector(
  selectorProductState,
  (state) => {
    let price = 0;
    for (let i = 0; i < state.productsInBasket.length; i++) {
      price += state.productsInBasket[i].price;
    }
    return price;
  }
);
