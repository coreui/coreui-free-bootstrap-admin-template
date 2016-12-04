import Config from "../../config-color";
import Utils from "../../utils";

export class BarChart {
  chartData = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [{
      label: 'Series A',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: Utils.convertHex(Config.brandInfo, 10),
      borderColor: Config.brandInfo,
      borderWidth: 2
    }, {
      label: 'Series B',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderWidth: 2
    }]
  };
  options = {
    legend: {
      display: false
    }

  }
}
