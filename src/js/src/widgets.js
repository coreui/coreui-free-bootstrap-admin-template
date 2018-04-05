/* global Chart, GetStyle */
import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.0.0-beta.1): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
const WidgetsView = (($) => {
  // eslint-disable-next-line no-unused-vars
  const CardChart1 = new Chart($('#card-chart1'), {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: GetStyle('--primary'),
          borderColor: 'rgba(255,255,255,.55)',
          data: [65, 59, 84, 84, 51, 55, 40]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
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
            min: 35,
            max: 89
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
  })

  // eslint-disable-next-line no-unused-vars
  const CardChart2 = new Chart($('#card-chart2'), {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: GetStyle('--info'),
          borderColor: 'rgba(255,255,255,.55)',
          data: [1, 18, 9, 17, 34, 22, 11]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
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
            min: -4,
            max: 39
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
          hoverRadius: 4
        }
      }
    }
  })

  // eslint-disable-next-line no-unused-vars
  const CardChart3 = new Chart($('#card-chart3'), {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,255,255,.2)',
          borderColor: 'rgba(255,255,255,.55)',
          data: [78, 81, 80, 45, 34, 12, 40]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    }
  })

  // eslint-disable-next-line no-unused-vars
  const CardChart4 = new Chart($('#card-chart4'), {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,255,255,.2)',
          borderColor: 'rgba(255,255,255,.55)',
          data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
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
  })

  // Random Numbers
  const Random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  // eslint-disable-next-line no-unused-vars
  const SparklineChart1 = new Chart($('#sparkline-chart-1'), {
    type: 'bar',
    data: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
      datasets: [
        {
          backgroundColor: GetStyle('--primary'),
          borderColor: 'transparent',
          borderWidth: 1,
          data: [Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100)]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    }
  })

  // eslint-disable-next-line no-unused-vars
  const SparklineChart2 = new Chart($('#sparkline-chart-2'), {
    type: 'bar',
    data: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
      datasets: [
        {
          backgroundColor: GetStyle('--warning'),
          borderColor: 'transparent',
          borderWidth: 1,
          data: [Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100)]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    }
  })

  // eslint-disable-next-line no-unused-vars
  const SparklineChart3 = new Chart($('#sparkline-chart-3'), {
    type: 'bar',
    data: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
      datasets: [
        {
          backgroundColor: GetStyle('--success'),
          borderColor: 'transparent',
          borderWidth: 1,
          data: [Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100)]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    }
  })

  // eslint-disable-next-line no-unused-vars
  const SparklineChart4 = new Chart($('#sparkline-chart-4'), {
    type: 'line',
    data: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: GetStyle('--info'),
          borderWidth: 2,
          data: [Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100)]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }
  })

  // eslint-disable-next-line no-unused-vars
  const SparklineChart5 = new Chart($('#sparkline-chart-5'), {
    type: 'line',
    data: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: GetStyle('--success'),
          borderWidth: 2,
          data: [Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100)]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }
  })

  // eslint-disable-next-line no-unused-vars
  const SparklineChart6 = new Chart($('#sparkline-chart-6'), {
    type: 'line',
    data: {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: GetStyle('--danger'),
          borderWidth: 2,
          data: [Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100), Random(40, 100)]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }
  })

  const BrandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  const BrandBoxChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        display:false
      }]
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    }
  }

  // eslint-disable-next-line no-unused-vars
  const BrandBoxChart1 = new Chart($('#social-box-chart-1'), {
    type: 'line',
    data: {
      labels: BrandBoxChartLabels,
      datasets: [{
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [65, 59, 84, 84, 51, 55, 40]
      }]
    },
    options: BrandBoxChartOptions
  })

  // eslint-disable-next-line no-unused-vars
  const BrandBoxChart2 = new Chart($('#social-box-chart-2'), {
    type: 'line',
    data: {
      labels: BrandBoxChartLabels,
      datasets: [{
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [1, 13, 9, 17, 34, 41, 38]
      }]
    },
    options: BrandBoxChartOptions
  })

  // eslint-disable-next-line no-unused-vars
  const BrandBoxChart3 = new Chart($('#social-box-chart-3'), {
    type: 'line',
    data: {
      labels: BrandBoxChartLabels,
      datasets: [{
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [78, 81, 80, 45, 34, 12, 40]
      }]
    },
    options: BrandBoxChartOptions
  })

  // eslint-disable-next-line no-unused-vars
  const BrandBoxChart4 = new Chart($('#social-box-chart-4'), {
    type: 'line',
    data: {
      labels: BrandBoxChartLabels,
      datasets: [{
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [35, 23, 56, 22, 97, 23, 64]
      }]
    },
    options: BrandBoxChartOptions
  })

  return WidgetsView
})($)
