import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from "../../../environments/environment";
import {productReducer, ProductsState} from "./product.reducer";


export interface State {
  products: ProductsState
}

export const reducers: ActionReducerMap<State> = {
  products: productReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

