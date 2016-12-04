export class PolarChart {
  chartData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Tele Sales', 'Corporate Sales'],
    datasets: [{
      data: [300, 500, 100, 40, 120],
      backgroundColor: [
        "#FF6384",
        "#4BC0C0",
        "#FFCE56",
        "#E7E9ED",
        "#36A2EB"
      ]
    }]
  };
  options = {
    legend: {
      display: false
    }
  }
}
