import Config from "../../config-color";

export class CardChart1 {
  lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      fill: false,
      data: [65, 59, 84, 84, 51, 55, 40],
      backgroundColor: Config.brandPrimary,
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
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }

}
