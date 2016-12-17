import Config from "../../config-color";
import Utils from "../../utils";

export class LineChart {
  chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Series A',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: Utils.convertHex(Config.brandInfo, 10),
      borderColor: Config.brandInfo,
    }, {
      label: 'Series B',
      data: [28, 48, 40, 19, 86, 27, 90]
    }]
  };
  options = {
    legend: {
      display: false
    }

  }
}
