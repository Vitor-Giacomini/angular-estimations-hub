import { Component, Input } from '@angular/core';
import { Estimation } from '../../@models/estimation.model';
import { Estimator } from '../../@models/estimator.model';
import { Product } from '../../@models/product.model';

@Component({
  selector: 'app-estimations-list',
  templateUrl: './estimations-list.component.html',
  styleUrls: ['./estimations-list.component.scss']
})
export class EstimationsListComponent {

  @Input() estimationList!: Estimation[];
  @Input() estimatorList!: Estimator[];
  @Input() productList!: Product[];
}
