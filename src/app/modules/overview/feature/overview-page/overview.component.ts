import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { startWith, catchError, EMPTY, ignoreElements, of, combineLatest } from 'rxjs';
import { Estimation } from 'src/app/modules/estimations/@models/estimation.model';
import { EstimationService } from 'src/app/modules/estimations/data-access/estimation.service';
import { Product } from 'src/app/modules/products/@models/product.model';
import { ProductService } from 'src/app/modules/products/data-access/product.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{

  constructor(private estimationService: EstimationService, private productService: ProductService) { }

  estimationList!: Estimation[];
  productList!: Product[];
  totalSavings: number = 0;
  approvedEstimations: number = 0;
  biggestEstimation: number = 0;

  ngOnInit(): void {
    this.estimationService.getEstimations().subscribe((estimations) => { this.estimationList = estimations });
    this.productService.getProducts().subscribe((products) => { this.productList = products });
  }

  getTotalSavings(){
    let totalSavings = 0;
    this.estimationList.forEach(estimation => {
      if (estimation.estimationStatus === 'accepted') {
        totalSavings += estimation.estimationSavings;
      }
    });
    this.totalSavings = totalSavings;
    return totalSavings;
  }

  getApprovedEstimations(){
    let approvedEstimations = 0;
    this.estimationList.forEach(estimation => {
      if (estimation.estimationStatus === 'accepted') {
        approvedEstimations++;
      }
    });
    this.approvedEstimations = approvedEstimations;
    return approvedEstimations;
  }

  findBiggestEstimation(){
    let maxSavings = 0;
    this.estimationList.forEach((estimation) => {
      if (estimation.estimationSavings > maxSavings) {
        maxSavings = estimation.estimationSavings;
      }
    });
    this.biggestEstimation = maxSavings;
    return maxSavings;
  }
}
