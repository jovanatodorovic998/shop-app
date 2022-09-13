import {createFeatureSelector, createSelector} from "@ngrx/store";

import * as fromProducts from './product.reducer'
import {productsFeatureKey} from "./product.reducer";


export const selectorProductState = createFeatureSelector<any>(productsFeatureKey);

export const getAllProducts = createSelector(
  selectorProductState,
  fromProducts.selectAll
)


