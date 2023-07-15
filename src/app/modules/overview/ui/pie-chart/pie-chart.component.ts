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
        labels: ['Approved', 'Pending Analysis' , 'Rejected'],
	       datasets: [{
    label: 'Estimations',
    data: [this.approvedEstimations.length, this.pendingEstimations.length, this.rejectedEstimations.length],
    backgroundColor: ['lightgreen', 'yellow', 'coral'],
    hoverOffset: 4
  }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 30,
              boxHeight: 30,
              padding: 20,
              font: {
                size: 32,
              },
            },
          }
        }
      }
    });
  }
}
