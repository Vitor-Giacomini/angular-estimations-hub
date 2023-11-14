import { Component, Input, OnInit } from '@angular/core';
import { Estimation } from '../../@models/estimation.model';
import { EstimationService } from '../../data-access/estimation.service';

@Component({
  selector: 'app-estimations-list',
  templateUrl: './estimations-list.component.html',
  styleUrls: ['./estimations-list.component.scss']
})
export class EstimationsListComponent implements OnInit{

  constructor(private estimationService: EstimationService) {}

  ngOnInit(): void {
    this.estimationList.sort((a, b) => b.estimationId! - a.estimationId!);
  }

  @Input() estimationList!: Estimation[];
  //@Input() estimatorList!: Estimator[];
  //@Input() productList!: Product[];

  setEstimationStatus(estimation: Estimation, status: string){
    estimation.estimationStatus = status;
    this.estimationService.setEstimationStatus(estimation);
  }

  getStatusColor(status: String){
    switch(status){
      case 'accepted': return 'estimation-status status-accepted';
      case 'rejected': return 'estimation-status status-rejected';
      default: return 'estimation-status status-proposed';
    }
  }
}
