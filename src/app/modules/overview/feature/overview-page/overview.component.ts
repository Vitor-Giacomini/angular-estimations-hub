import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
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

  constructor(private estimationService: EstimationService, private productService: ProductService) { }
  totalSavings: number = 0;
  approvedEstimations: number = 0;
  biggestEstimation: number = 0;

  estimations$ = this.estimationService.getEstimations().pipe(
    startWith(null),
    catchError(() => EMPTY),
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
    catchError(() => EMPTY),
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

  getAverageSavings(estimationList: Estimation[], productList: Product[]){
    let totalSavings = 0;
    estimationList.forEach(estimation => {
      if (estimation.estimationStatus === 'accepted') {
        totalSavings += estimation.estimationSavings;
      }
    });
    return (totalSavings/productList.length).toFixed(2);
  }

  getApprovedEstimations(estimationList: Estimation[]){
    let approvedEstimations = 0;
    estimationList.forEach(estimation => {
      if (estimation.estimationStatus === 'accepted') {
        approvedEstimations++;
      }
    });
    return approvedEstimations;
  }

  findBiggestEstimation(estimationList: Estimation[]){
    let maxSavings = 0;
    estimationList.forEach((estimation) => {
      if (estimation.estimationSavings > maxSavings) {
        maxSavings = estimation.estimationSavings;
      }
    });
    return maxSavings;
  }
}
