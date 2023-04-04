import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, debounceTime, distinctUntilChanged, EMPTY, ignoreElements, map, of, startWith } from 'rxjs';
import { EstimationService } from '../../data-access/estimation.service';

@Component({
  selector: 'app-estimations',
  templateUrl: './estimations.component.html',
  styleUrls: ['./estimations.component.scss']
})
export class EstimationsComponent {

  searchIdValue = '';
  searchProductValue = '';
  searchEstimatorValue = '';
  searchDescriptionValue = '';
  searchSavingsValue = '';
  searchStatusValue = '';

  searchedIdAction$ = new BehaviorSubject<string | null>(null);
  searchedProductAction$ = new BehaviorSubject<string | null>(null);
  searchedEstimatorAction$ = new BehaviorSubject<string | null>(null);
  searchedDescriptionAction$ = new BehaviorSubject<string | null>(null);
  searchedSavingsAction$ = new BehaviorSubject<string | null>(null);
  searchedStatusAction$ = new BehaviorSubject<string | null>(null);

  constructor(
    private estimationService: EstimationService
  ) { }

  estimations$ = combineLatest([this.estimationService.getEstimations().pipe(
    startWith(null),
    catchError(() => EMPTY)
  ),
  this.searchedIdAction$.pipe(
    distinctUntilChanged(),
    debounceTime(500),
  ),
  this.searchedProductAction$.pipe(
    distinctUntilChanged(),
    debounceTime(500),
  ),
  this.searchedEstimatorAction$.pipe(
    distinctUntilChanged(),
    debounceTime(500),
  ),
  this.searchedDescriptionAction$.pipe(
    distinctUntilChanged(),
    debounceTime(500),
  ),
  this.searchedSavingsAction$.pipe(
    distinctUntilChanged(),
    debounceTime(500),
  ),
  this.searchedStatusAction$.pipe(
    distinctUntilChanged(),
    debounceTime(500),
  )
  ]).pipe(
    map(([estimations, searchedId, searchedProduct, searchedEstimator, searchedDescription, searchedSavings, searchedStatus]) => {
      if (searchedId) {
        estimations = estimations?.filter(estimation => 
          estimation.estimationId!.toString().match(searchedId))!;
      }
      if (searchedProduct) {
        estimations = estimations?.filter(estimation => 
          estimation.productName.toLowerCase().includes(searchedProduct.toLowerCase()))!;
      }
      if (searchedEstimator) {
        estimations = estimations?.filter(estimation => 
          estimation.estimatorName.toLowerCase().includes(searchedEstimator.toLowerCase()))!;
      }
      if (searchedDescription) {
        estimations = estimations?.filter(estimation => 
          estimation.estimationDescription.toLowerCase().includes(searchedDescription.toLowerCase()))!;
      }
      if (searchedSavings) {
        estimations = estimations?.filter(estimation => 
          estimation.estimationSavings.toString().match(searchedSavings))!;
      }
      if (searchedStatus) {
        estimations = estimations?.filter(estimation => 
          estimation.estimationStatus!.toLowerCase().includes(searchedStatus.toLowerCase()))!;
      }
      return estimations;
    })
  );

  estimationsError$ = this.estimationService.getEstimations().pipe(
    ignoreElements(),
    startWith(null),
    catchError(error => {
      error = new HttpErrorResponse({ status: 404, statusText: 'Could not load estimations' });
      return of(error);
    })
  )

  viewModel$ = combineLatest({
    estimations: this.estimations$,
    estimationsError: this.estimationsError$
  })

  searchId(id: string) {
    this.searchedIdAction$.next(id);
  }

  searchProduct(product: string) {
    this.searchedProductAction$.next(product);
  }

  searchEstimator(estimator: string) {
    this.searchedEstimatorAction$.next(estimator);
  }

  searchDescription(description: string) {
    this.searchedDescriptionAction$.next(description);
  }

  searchSavings(savings: string) {
    this.searchedSavingsAction$.next(savings);
  }

  searchStatus(status: string) {
    this.searchedStatusAction$.next(status);
  }

}
