import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { finalize, first, tap } from 'rxjs/operators';
import { getAllPoducts } from './product.action';

@Injectable()
export class ProductResolver implements Resolve<any> {
  loading = false;
  constructor(private store: Store<State>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(getAllPoducts());
        }
      }),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
