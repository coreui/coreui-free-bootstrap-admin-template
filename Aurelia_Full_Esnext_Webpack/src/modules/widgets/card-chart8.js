import Config from "../../config-color";

export class CardChart8 {
  chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      fill: false,
      data: [65, 59, 84, 84, 51, 55, 40],
      borderColor: Config.brandInfo,
      backgroundColor: 'transparent'
    }]

  };

  options = {
    legend: {
      display: false
    },
    responsive: false,
    maintainAspectRatio: false,
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

}
