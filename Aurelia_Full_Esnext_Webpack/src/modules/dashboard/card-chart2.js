import Config from "../../config-color";

export class CardChart2 {

  lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      fill: false,
      data:  [1, 18, 9, 17, 34, 22, 11],
      backgroundColor: Config.brandInfo,
      borderColor: 'rgba(255,255,255,.55)'
    }]

  };

  options = {
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, this.lineChartData.datasets[0].data) - 5,
          max: Math.max.apply(Math, this.lineChartData.datasets[0].data) + 5,
        }
      }]
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    }
  }

}
