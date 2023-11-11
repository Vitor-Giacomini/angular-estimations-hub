import { Component, Input, SimpleChanges } from '@angular/core';
import { Estimation } from 'src/app/modules/estimations/@models/estimation.model';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Product } from 'src/app/modules/products/@models/product.model';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent {
  public chart: any;

  @Input() products!: Product[];
  @Input() estimations!: Estimation[];

  chairEstimations: Estimation[] = [];
  tableEstimations: Estimation[] = [];
  stoolEstimations: Estimation[] = [];

  chairSavings: number = 0;
  tableSavings: number = 0;
  stoolSavings: number = 0;

  chairCombinedPrice = 220;
  tableCombinedPrice = 280;
  stoolCombinedPrice = 160;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['estimations'] && changes['estimations'].currentValue) {
      this.mapEstimations();
    }
  }

  mapEstimations(){
    this.estimations.forEach(estimation => {
      if (estimation.productName.includes("Poltrona") || estimation.productName.includes("Assento")) {
        this.chairEstimations.push(estimation);
      } else if (estimation.productName.includes("Mesa")) {
        this.tableEstimations.push(estimation);
      } else if (estimation.productName.includes("Banco")) {
        this.stoolEstimations.push(estimation);
      }
    });    
    this.getSavings();
    this.createChart();
  }

  getSavings(){
    this.chairSavings = this.chairEstimations.reduce((total, estimation) => {
      return estimation.estimationStatus === "accepted" ? total + estimation.estimationSavings : total;
    }, 0);
  
    this.tableSavings = this.tableEstimations.reduce((total, estimation) => {
      return estimation.estimationStatus === "accepted" ? total + estimation.estimationSavings : total;
    }, 0);
  
    this.stoolSavings = this.stoolEstimations.reduce((total, estimation) => {
      return estimation.estimationStatus === "accepted" ? total + estimation.estimationSavings : total;
    }, 0); 
  }
  

  createChart(){
    if (this.chart) {
      this.chart.destroy(); 
    }
  
    this.chart = new Chart("columnChart", { 
      type: 'bar',
      data: {
        labels: ['Chairs', 'Tables', 'Stools'], 
        datasets: [{
          label: 'Cost - Savings',
          data: [
            this.chairCombinedPrice - this.chairSavings, 
            this.tableCombinedPrice - this.tableSavings, 
            this.stoolCombinedPrice - this.stoolSavings],
          backgroundColor: 'rgba(46, 204, 113, 0.5)',
          borderColor: 'rgba(46, 204, 113, 1)',
          borderWidth: 1,
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          order: 1
        },
        {
          label: 'Original Cost',
          data: [this.chairCombinedPrice, this.tableCombinedPrice, this.stoolCombinedPrice], 
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
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
            offset: true,
            ticks: {
              font: {
                size: 20
              }
            }
          },
          y: {
            stacked: false,
            ticks: {
              font: {
                size: 16
              }
            }
          }
        },
        plugins: {
          datalabels: {
            
          },
          legend: {
            display: true,
            labels: {
              padding: 20,
              font: {
                size: 20
              }
            }
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
