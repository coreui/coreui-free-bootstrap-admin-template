import Config from "../../config-color";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

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
      backgroundColor: convertHex(Config.brandInfo, 10),
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
      this.chartData.datasets[0].data.push(random(50, 200));
      this.chartData.datasets[1].data.push(random(80, 100));
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
