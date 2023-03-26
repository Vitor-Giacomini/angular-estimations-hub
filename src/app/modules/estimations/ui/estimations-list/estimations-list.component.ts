import { Component, Input, OnInit } from '@angular/core';
import { Estimation } from '../../@models/estimation.model';

@Component({
  selector: 'app-estimations-list',
  templateUrl: './estimations-list.component.html',
  styleUrls: ['./estimations-list.component.scss']
})
export class EstimationsListComponent implements OnInit{

  ngOnInit(): void {
    console.log(this.estimationList);
  }

  @Input() estimationList!: Estimation[];
  //@Input() estimatorList!: Estimator[];
  //@Input() productList!: Product[];

  acceptEstimation(estimation: Estimation){
    
  }

  proposeEstimation(estimation: Estimation){
    
  }

  rejectEstimation(estimation: Estimation){
    
  }
}
