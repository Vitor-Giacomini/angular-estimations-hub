import { Component, Input, OnInit } from '@angular/core';
import { Estimation } from 'src/app/modules/estimations/@models/estimation.model';
import { Product } from '../../@models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{

  @Input() product!: Product;
  estimationList!: Estimation[];

  estimateCount = 0;
  acceptedCount = 0;
  rejectedCount = 0;
  proposedCount = 0;
  totalSavings = 0;
  
  ngOnInit(): void {
    console.log(this.product);
    this.calculateCounts();
    this.getTotalSavings();
  }

  calculateCounts(){
    this.estimationList = this.product.estimationList;
    this.estimateCount = this.estimationList.length;
    this.acceptedCount = this.estimationList.filter(
      estimation => estimation.estimationStatus == 'accepted').length;
    this.rejectedCount = this.estimationList.filter(
      estimation => estimation.estimationStatus == 'rejected').length;
    this.proposedCount = this.estimateCount - (this.acceptedCount + this.rejectedCount);
  }

  getTotalSavings(){
    for (let estimation of this.estimationList) {
      if (estimation.estimationStatus === 'accepted') {
        this.totalSavings += estimation.estimationSavings;
      }
    }
  }
  
  

}
