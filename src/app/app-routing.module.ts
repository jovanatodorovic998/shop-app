import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ShoppingBasketComponent} from "./components/shopping-basket/shopping-basket.component";
import {ProductResolver} from "./sahred/store/product.resolver";

const routes: Routes = [

  { path: 'products', component: ProductListComponent,resolve:[ProductResolver] },
  { path: 'basket', component: ShoppingBasketComponent },
  { path: '',redirectTo:'/products' ,pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ProductResolver]
})
export class AppRoutingModule { }
