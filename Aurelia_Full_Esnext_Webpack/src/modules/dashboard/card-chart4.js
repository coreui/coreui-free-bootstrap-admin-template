import Utils from "../../utils";

export class CardChart4 {
  barChartData = {
    labels: [],
    datasets: [{
      fill: false,
      data: [],
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }]

  };

  constructor() {
    var elements = 16;
    for (var i = 2000; i <= 2000 + elements; i++) {
      this.barChartData.labels.push(i);
      this.barChartData.datasets[0].data.push(Utils.random(40, 100));
    }
  }

  options = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6
      }],
      yAxes: [{
        display: false
      }]
    }
  }

}
