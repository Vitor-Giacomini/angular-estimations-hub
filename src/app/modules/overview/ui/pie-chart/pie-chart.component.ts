import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { Estimation } from 'src/app/modules/estimations/@models/estimation.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent{
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
    this.chart = new Chart("pieChart", {
      type: 'pie', 

      data: {
        labels: ['Pending Analysis', 'Approved', 'Rejected'],
	       datasets: [{
    label: 'Estimations',
    data: [this.pendingEstimations.length, this.approvedEstimations.length, this.rejectedEstimations.length],
    backgroundColor: ['yellow', 'lightgreen', 'coral'],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:1
      }
    });
  }
}
