import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as ProductActions from '../store/product.action'



export const productsFeatureKey = 'products';

export interface ProductsState extends EntityState<any> {
  products:any[],
  error:any,
}

export const adapter: EntityAdapter<any> = createEntityAdapter();

export const initialState: any = adapter.getInitialState({
  products: undefined,
  error:undefined
});



export const productReducer = createReducer(
  initialState,
  on(ProductActions.getAllPoducts,
    (state) => ({
      ...state,
    })
  ),

  on(ProductActions.getAllProductsSuccess,
    (state,{data}) => {
      return adapter.addMany(data,{
        ...state,
        products          : data,

      })
    }
  ),
  on(ProductActions.getAllProductsFailure,
    (state,{error}) => ({
      ...state,
      products          : undefined,
      error              :  error,
    })
  ),
  on(ProductActions.deleteProductSuccess,
    (state,{data}) => {
      return adapter.removeOne(data,state)
    }
  ),
  on(ProductActions.deleteProductFailure,
    (state,{error}) => ({
      ...state,
      products : undefined,
      error     : error
    })
  ),
  on(ProductActions.addProducts,
    (state) => ({
      ...state,
    })
  ),
  on(ProductActions.addEmployeesSuccess,
    (state,{user}) => {
      return adapter.addOne(user,{
        ...state,
        products          : user,
        error              : undefined,
      })
    }
  ),
  on(ProductActions.addEmployeesFailure,
    (state,{error}) => ({
      ...state,
      products          : undefined,
      error              : error,

    })
  ),
);


export const {selectAll} = adapter.getSelectors();
