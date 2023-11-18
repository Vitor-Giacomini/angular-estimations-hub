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

  // Average 2022 product cost //
  poltronaRealeza = 130;
  poltrona = 70;
  assentoDeMao = 110;
  mesaQuadrada = 90;
  mesaBar = 60;
  mesaNormal = 90;
  bancoVintage = 100;
  bancoMadeira = 30;
  bancoSaloon = 120;
  // ------------------------ //

  ngOnChanges(changes: SimpleChanges) {
    if (changes['estimations'] && changes['estimations'].currentValue) {
      this.createChart();
    }
  }

  calculateSavings(productName: String){
    return this.estimations.filter(estimation => 
      estimation.productName === productName).reduce((total, estimation) => {
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
        labels: 
          this.products.map(product => {
            return product.productName;
          }), 
        datasets: [{
          label: 'Cost - Savings',
          data: [
            this.poltronaRealeza - this.calculateSavings(this.products[0].productName),
            this.poltrona - this.calculateSavings(this.products[1].productName),
            this.assentoDeMao - this.calculateSavings(this.products[2].productName),
            this.mesaQuadrada - this.calculateSavings(this.products[3].productName),
            this.mesaBar - this.calculateSavings(this.products[4].productName),
            this.mesaNormal - this.calculateSavings(this.products[5].productName),
            this.bancoVintage - this.calculateSavings(this.products[6].productName),
            this.bancoMadeira - this.calculateSavings(this.products[7].productName),
            this.bancoSaloon - this.calculateSavings(this.products[8].productName),
          ],
          backgroundColor: 'rgba(46, 204, 113, 0.5)',
          borderColor: 'rgba(46, 204, 113, 1)',
          borderWidth: 1,
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          order: 1
        },
        {
          label: 'Original Cost',
          data: [
            this.poltronaRealeza,
            this.poltrona,
            this.assentoDeMao,
            this.mesaQuadrada,
            this.mesaBar,
            this.mesaNormal,
            this.bancoVintage,
            this.bancoMadeira,
            this.bancoSaloon,
          ], 
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
                size: 18
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
              padding: 40,
              font: {
                size: 18
              }
            }
          }
        }
      },
      plugins: [ChartDataLabels]
    });
    this.chart.update(); 
  }
}
