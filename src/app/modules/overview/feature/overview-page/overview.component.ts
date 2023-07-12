import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { startWith, catchError, EMPTY, ignoreElements, of, combineLatest, map, tap } from 'rxjs';
import { Estimation } from 'src/app/modules/estimations/@models/estimation.model';
import { EstimationService } from 'src/app/modules/estimations/data-access/estimation.service';
import { Product } from 'src/app/modules/products/@models/product.model';
import { ProductService } from 'src/app/modules/products/data-access/product.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent{

  constructor(private estimationService: EstimationService) { }

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
  viewModel$ = combineLatest({
    estimations: this.estimations$,
    estimationsError: this.estimationsError$
  }).pipe(
    tap(({estimations}) => {
      if (estimations) {
        this.getTotalSavings(estimations);
        this.getApprovedEstimations(estimations);
        this.findBiggestEstimation(estimations);
      }
    })
  );

  getTotalSavings(estimations: Estimation[]){
    console.log(estimations);
    estimations.forEach(estimation => {
      if (estimation.estimationStatus === 'accepted') {
        this.totalSavings += estimation.estimationSavings;
      }
    });
  }

  getApprovedEstimations(estimations: Estimation[]){
    estimations.forEach(estimation => {
      if (estimation.estimationStatus === 'accepted') {
        this.approvedEstimations++;
      }
    });
  }

  findBiggestEstimation(estimations: Estimation[]){
    let maxSavings = 0;
    estimations.forEach((estimation) => {
      if (estimation.estimationSavings > maxSavings) {
        maxSavings = estimation.estimationSavings;
      }
    });
    this.biggestEstimation = maxSavings;
  }
}
