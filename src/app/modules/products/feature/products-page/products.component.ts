import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, EMPTY, ignoreElements, of, startWith } from 'rxjs';
import { ProductService } from '../../data-access/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private productService: ProductService) { }

  products$ = this.productService.getProducts().pipe(
    startWith(null),
    catchError(() => EMPTY)
  );
  
  productsError$ = this.productService.getProducts().pipe(
    ignoreElements(),
    startWith(null),
    catchError(error => {
      error = new HttpErrorResponse({ status: 404, statusText: 'Could not load products' });
      return of(error);
    })
  )

  viewModel$ = combineLatest({
    products: this.products$,
    productsError: this.productsError$
  })
}
