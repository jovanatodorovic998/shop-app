import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/sahred/store';
import { numberOfProductsInBasket } from 'src/app/sahred/store/product.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public numOfProducts$!: Observable<number>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.numOfProducts$ = this.store.pipe(select(numberOfProductsInBasket));
  }
}
