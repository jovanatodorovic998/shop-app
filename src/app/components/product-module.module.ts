import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {productReducer} from "../sahred/store/product.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "../sahred/store/product.effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('products',productReducer),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductModuleModule { }
