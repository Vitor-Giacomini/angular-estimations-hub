import { Component, Input, SimpleChanges } from '@angular/core';
import { Estimation } from 'src/app/modules/estimations/@models/estimation.model';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
    if (this.chart) {
      this.chart.destroy(); // Destroy the previous instance of the chart if it exists
    }
  
    this.chart = new Chart("columnChart", { // Make sure to have a canvas with this ID in your template
      type: 'bar',
      data: {
        labels: ['Dataset 1', 'Dataset 2'], // These would be your actual data labels
        datasets: [{
          label: 'Front Bar',
          data: [10, 20], // Replace with actual data
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          order: 1
        },
        {
          label: 'Back Bar',
          data: [15, 25], // Replace with actual data
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          order: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: false,
            grid: {
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            offset: true
          },
          y: {
            stacked: false
          }
        },
        plugins: {
          datalabels: {
            // Configure your datalabels as needed
          },
          legend: {
            display: true
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  
    // You will need to adjust your approach to update or configure the chart as manipulating _model is not recommended.
    // The recommended approach is to update the chart data and then call this.chart.update();
  
    this.chart.update(); // Update the chart to render the shifted bars
  }
  
  
}
