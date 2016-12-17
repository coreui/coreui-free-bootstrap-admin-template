import Config from "../../config-color";
import Utils from "../../utils";

export class TrafficDemo {
  chartData = {
    labels: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Current',
      fill: true,
      data: [],
      backgroundColor: Utils.convertHex(Config.brandInfo, 10),
      borderColor: Config.brandInfo,
      pointHoverBackgroundColor: '#fff'
    }, {
      label: 'Previous',
      fill: false,
      data: [],
      backgroundColor: 'transparent',
      borderColor: Config.brandSuccess,
      pointHoverBackgroundColor: '#fff'
    }, {
      label: 'BEP',
      fill: false,
      data: [],
      backgroundColor: 'transparent',
      borderColor: Config.brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }]

  };

  constructor() {
    var elements = 27;
    for (var i = 0; i <= elements; i++) {
      this.chartData.datasets[0].data.push(Utils.random(50, 200));
      this.chartData.datasets[1].data.push(Utils.random(80, 100));
      this.chartData.datasets[2].data.push(65);
    }
  }


  options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
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
