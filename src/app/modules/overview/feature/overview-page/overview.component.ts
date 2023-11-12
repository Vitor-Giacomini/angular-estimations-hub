import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { startWith, catchError, EMPTY, ignoreElements, of, combineLatest, map, tap } from 'rxjs';
import { Estimation } from 'src/app/modules/estimations/@models/estimation.model';
import { EstimationService } from 'src/app/modules/estimations/data-access/estimation.service';
import { ProductService } from 'src/app/modules/products/data-access/product.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent{

  constructor(private estimationService: EstimationService, private productService: ProductService) { }

  estimationList!: Estimation[];
  totalSavings: number = 0;
  approvedEstimations: number = 0;
  biggestEstimation: number = 0;

  estimations$ = this.estimationService.getEstimations().pipe(
    startWith(null),
    catchError(() => EMPTY)
  );
  estimationsError$ = this.estimationService.getEstimations().pipe(
    ignoreElements(),
    startWith(null),
    catchError(error => {
      error = new HttpErrorResponse({ status: 404, statusText: 'Could not load estimations' });
      return of(error);
    })
  )
  products$ = this.productService.getProducts().pipe(
    startWith(null),
    catchError(() => EMPTY)
  )
  productsError$ = this.productService.getProducts().pipe(
    ignoreElements(),
    startWith(null),
    catchError(error => {
      error = new HttpErrorResponse({ status: 404, statusText: 'Could not load products' });
      return of(error);
    })
  )

  viewModel$ = combineLatest({
    estimations: this.estimations$,
    estimationsError: this.estimationsError$,
    products: this.products$,
    productsError: this.productsError$
  });
}
