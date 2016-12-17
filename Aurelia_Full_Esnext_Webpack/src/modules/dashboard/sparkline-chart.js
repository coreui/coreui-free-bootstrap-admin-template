import {bindable} from "aurelia-framework";
import Config from "../../config-color";

export class SparklineChart {
  @bindable dataIndex;
  chartData = [{
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      data: [65, 59, 84, 84, 51, 55, 40],
      backgroundColor: 'transparent',
      borderColor: Config.brandPrimary
    }]
  }, {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      data: [1, 13, 9, 17, 34, 41, 38],
      backgroundColor: 'transparent',
      borderColor: Config.brandDanger
    }]
  }, {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      data: [1, 13, 9, 17, 34, 41, 38],
      backgroundColor: 'transparent',
      borderColor: Config.brandWarning
    }]
  }, {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      data: [35, 23, 56, 22, 97, 23, 64],
      backgroundColor: 'transparent',
      borderColor: Config.brandSuccess
    }]
  }, {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      data: [65, 59, 84, 84, 51, 55, 40],
      backgroundColor: 'transparent',
      borderColor: '#d1d4d7'
    }]
  }, {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      data: [1, 13, 9, 17, 34, 41, 38],
      backgroundColor: 'transparent',
      borderColor: Config.brandPrimary
    }]
  }];


  options = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    }
  }

}
