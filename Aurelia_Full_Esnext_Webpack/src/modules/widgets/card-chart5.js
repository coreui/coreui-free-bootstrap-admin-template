import Config from "../../config-color";
import Utils from "../../utils";

export class CardChart5 {
  chartData = {
    labels: [],
    datasets: [{
      fill: false,
      data: [],
      backgroundColor: Config.brandPrimary,
      borderColor: 'transparent',
      borderWidth: 1
    }]

  };

  constructor() {
    var elements = 15;
    for (var i = 0; i <= elements; i++) {
      this.chartData.labels.push(i);
      this.chartData.datasets[0].data.push(Utils.random(40, 100));
    }
  }

  options = {
    legend: {
      display: false
    },
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
  }

}
