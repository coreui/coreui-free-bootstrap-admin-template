import Config from "../../config-color";
import Utils from "../../utils";

export class PieChart {
  chartData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [{
      label: 'Series A',
      data: [300, 500, 100],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ]
    }]
  };
  options = {
    legend: {
      display: false
    }
  }
}
