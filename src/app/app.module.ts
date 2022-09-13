import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SingleProductComponent } from './components/product-list/single-product/single-product.component';
import {MatBadgeModule} from '@angular/material/badge';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import {EffectsFeatureModule, EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from "./sahred/store";
import {productReducer, productsFeatureKey} from "./sahred/store/product.reducer";
import {ProductsEffects} from "./sahred/store/product.effects";
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ShoppingBasketComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([ProductsEffects]),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
