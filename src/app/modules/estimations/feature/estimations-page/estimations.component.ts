import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, combineLatest, EMPTY, ignoreElements, map, mergeMap, Observable, of, startWith } from 'rxjs';
import { EstimationService } from '../../data-access/estimation.service';
import { EstimatorService } from '../../data-access/estimator.service';
import { ProductService } from '../../data-access/product.service';

@Component({
  selector: 'app-estimations',
  templateUrl: './estimations.component.html',
  styleUrls: ['./estimations.component.scss']
})
export class EstimationsComponent{

  constructor(
    private estimationService: EstimationService, 
    private estimatorService: EstimatorService, 
    private productService: ProductService
  ) {}

  estimations$ = this.estimationService.getEstimations().pipe(
    startWith(null),
    catchError(() => EMPTY)
  );

  estimationsError$ = this.estimationService.getEstimations().pipe(
    ignoreElements(),
    startWith(null),
    catchError(error => {
      error = new HttpErrorResponse({status: 404, statusText: 'Could not load estimations'});
      return of(error);
    })
  )

  estimators$ = combineLatest([
    this.estimatorService.getEstimators().pipe(
      startWith(null),
      catchError(()=> EMPTY)
    ),
  ])

  estimatorsError$ = this.estimatorService.getEstimators().pipe(
    ignoreElements(),
    startWith(null),
    catchError(error => {
      error = new HttpErrorResponse({status: 404, statusText: 'Could not load estimators'});
      return of(error);
    })
  )

  products$ = combineLatest([
    this.productService.getProducts().pipe(
      startWith(null),
      catchError(()=> EMPTY)
    ),
  ])

  productsError$ = this.productService.getProducts().pipe(
    ignoreElements(),
    startWith(null),
    catchError(error => {
      error = new HttpErrorResponse({status: 404, statusText: 'Could not load products'});
      return of(error);
    })
  )

  viewModel$ = combineLatest({
    estimations: this.estimations$,
    estimationsError: this.estimationsError$,
    estimators: this.estimators$,
    estimatorsError: this.estimatorsError$,
    products: this.products$,
    productsError: this.productsError$
  })

  selectedTab: String = "all-estimates";

  setTab(tabName: String): void {
    this.selectedTab = tabName;
  }

}
