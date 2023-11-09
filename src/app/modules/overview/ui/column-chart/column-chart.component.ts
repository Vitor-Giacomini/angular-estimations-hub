import { Component, Input, SimpleChanges } from '@angular/core';
import { Estimation } from 'src/app/modules/estimations/@models/estimation.model';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent {
  public chart: any;
  @Input() estimations!: Estimation[];
  pendingEstimations: Estimation[] = [];
  approvedEstimations: Estimation[] = [];
  rejectedEstimations: Estimation[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['estimations'] && changes['estimations'].currentValue) {
      this.mapEstimations();
    }
  }

  mapEstimations(){
    this.estimations.forEach(estimation => {
      if(estimation.estimationStatus !== "proposed"){
        estimation.estimationStatus === "accepted" 
          ? this.approvedEstimations.push(estimation) 
          : this.rejectedEstimations.push(estimation)
      }
      else{
        this.pendingEstimations.push(estimation);
      }
    })
    this.createChart();
  }

  createChart(){
    
  }
}
