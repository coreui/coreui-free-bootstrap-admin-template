import Config from "../../config-color";
import Utils from "../../utils";

export class RadarChart {
  chartData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [{
      data: [65, 59, 90, 81, 56, 55, 40],
      backgroundColor: Utils.convertHex(Config.brandInfo, 10),
      borderColor: Config.brandInfo,
    }, {
      data: [28, 48, 40, 19, 96, 27, 100]
    }]
  };
  options = {
    legend: {
      display: false
    }
  }
}
