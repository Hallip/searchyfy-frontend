import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

    ngOnInit(){
      this.chartColor = "#FFFFFF";




      // this.canvas = document.getElementById("chartEmail");
      // this.ctx = this.canvas.getContext("2d");
      // this.chartEmail = new Chart(this.ctx, {
      //   type: 'pie',
      //   data: {
      //     labels: [1, 2, 3],
      //     datasets: [{
      //       label: "Emails",
      //       pointRadius: 0,
      //       pointHoverRadius: 0,
      //       backgroundColor: [
      //         '#e3e3e3',
      //         '#4acccd',
      //         '#fcc468',
      //         '#ef8157'
      //       ],
      //       borderWidth: 0,
      //       data: [342, 480, 530, 120]
      //     }]
      //   },

      //   options: {

      //     legend: {
      //       display: false
      //     },

      //     pieceLabel: {
      //       render: 'percentage',
      //       fontColor: ['white'],
      //       precision: 2
      //     },

      //     tooltips: {
      //       enabled: false
      //     },

      //     scales: {
      //       yAxes: [{

      //         ticks: {
      //           display: false
      //         },
      //         gridLines: {
      //           drawBorder: false,
      //           zeroLineColor: "transparent",
      //           color: 'rgba(255,255,255,0.05)'
      //         }

      //       }],

      //       xAxes: [{
      //         barPercentage: 1.6,
      //         gridLines: {
      //           drawBorder: false,
      //           color: 'rgba(255,255,255,0.1)',
      //           zeroLineColor: "transparent"
      //         },
      //         ticks: {
      //           display: false,
      //         }
      //       }]
      //     },
      //   }
      // });

      var speedCanvas = document.getElementById("speedChart");

      var dataFirst = {
        data: [370, 394, 415, 409, 425, 445, 460],
        fill: false,
        borderColor: '#6bd098',
        backgroundColor: 'transparent',
        pointBorderColor: '#6bd098',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var dataSecond = {
        data: [320, 340, 365, 360, 370, 385, 390],
        fill: false,
        borderColor: '#f17e5d',
        backgroundColor: 'transparent',
        pointBorderColor: '#f17e5d',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      };

      var speedData = {
        labels: ["July 07", "July 08", "July 09", "July 10", "July 11", "July 12", "July 13"],
        datasets: [dataFirst, dataSecond]
      };

      var chartOptions = {
        legend: {
          display: false,
          position: 'top'
        }
      };

      var lineChart = new Chart(speedCanvas, {
        type: 'line',
        hover: false,
        data: speedData,
        options: chartOptions
      });
    }
}
