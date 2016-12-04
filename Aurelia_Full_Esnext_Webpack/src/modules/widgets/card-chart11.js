import {bindable} from "aurelia-framework";


export class CardChart11 {
  @bindable colorClass;
  chartDataLine = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      fill: false,
      data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      borderWidth: 0
    }]
  };

  constructor() {
    this.chartDataBar = this.chartDataLine;
    this.chartDataBar.datasets[0].backgroundColor = 'rgba(0,0,0,.2)'
    this.chartDataBar.datasets[0].borderWidth = 0
  }


  optionsLine = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        points: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {point: {radius: 0}}
  }

  optionsBar = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
        }
      }]
    },
  }

}
