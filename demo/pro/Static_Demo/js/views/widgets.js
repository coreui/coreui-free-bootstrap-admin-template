$(function(){
  'use strict';
  
  //convert Hex to RGBA
  function convertHex(hex,opacity){
    hex = hex.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);

    var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
  }

  //Cards with Charts
  var labels = ['January','February','March','April','May','June','July'];
  var data = {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: $.brandPrimary,
        borderColor: 'rgba(255,255,255,.55)',
        data: [65, 59, 84, 84, 51, 55, 40]
      },
    ]
  };
  var options = {
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
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, data.datasets[0].data) - 5,
          max: Math.max.apply(Math, data.datasets[0].data) + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    }
  };
  var ctx = $('#card-chart1');
  var cardChart1 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  var data = {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: $.brandInfo,
        borderColor: 'rgba(255,255,255,.55)',
        data: [1, 18, 9, 17, 34, 22, 11]
      },
    ]
  };

  var options = {
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
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, data.datasets[0].data) - 5,
          max: Math.max.apply(Math, data.datasets[0].data) + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    }
  };
  var ctx = $('#card-chart2');
  var cardChart2 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  var options = {
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
      }],
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    }
  };
  var data = {
    maintainAspectRatio: false,
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [78, 81, 80, 45, 34, 12, 40]
      },
    ]
  };
  var ctx = $('#card-chart3');
  var cardChart3 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  //Random Numbers
  function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  var elements = 16;
  var labels = [];
  var data = [];

  for (var i = 0; i <= elements; i++) {
    labels.push('1');
    data.push(random(40,100));
  }


  var options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.7,
      }],
      yAxes: [{
        display: false,
      }]
    },

  };
  var data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.3)',
        borderColor: 'transparent',
        data: data
      },
    ]
  };
  var ctx = $('#card-chart4');
  var cardChart4 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });


  var elements = 15;
  var labels = [];
  var data = [];

  for (var i = 0; i <= elements; i++) {
    labels.push('1');
    data.push(random(40,100));
  }

  var options = {
    responsive: false,
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
  };
  var data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: $.brandPrimary,
        borderColor: 'transparent',
        borderWidth: 1,
        data: data
      },
    ]
  };
  var ctx = $('#chart-1');
  var Chart1 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });


  var elements = 15;
  var labels = [];
  var data = [];

  for (var i = 0; i <= elements; i++) {
    labels.push('1');
    data.push(random(40,100));
  }

  var options = {
    responsive: false,
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
  };
  var data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: $.brandWarning,
        borderColor: 'transparent',
        borderWidth: 1,
        data: data
      },
    ]
  };
  var ctx = $('#chart-2');
  var Chart2 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });


  var elements = 15;
  var labels = [];
  var data = [];

  for (var i = 0; i <= elements; i++) {
    labels.push('1');
    data.push(random(40,100));
  }

  var options = {
    responsive: false,
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
  };
  var data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: $.brandSuccess,
        borderColor: 'transparent',
        borderWidth: 1,
        data: data
      },
    ]
  };
  var ctx = $('#chart-3');
  var Chart3 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });

  var options = {
    responsive: false,
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
    elements: { point: { radius: 0 } }
  };
  var data = {
    labels: ['January','February','March','April','May','June','July'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: $.brandInfo,
        borderWidth: 2,
        data: [65, 59, 84, 84, 51, 55, 40]
      },
    ]
  };
  var ctx = $('#chart-4');
  var Chart4 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });


  var options = {
    responsive: false,
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
    elements: { point: { radius: 0 } }
  };
  var data = {
    labels: ['January','February','March','April','May','June','July'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: $.brandSuccess,
        borderWidth: 2,
        data: [65, 59, 84, 84, 51, 55, 40]
      },
    ]
  };
  var ctx = $('#chart-5');
  var Chart5 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });


  var options = {
    responsive: false,
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
    elements: { point: { radius: 0 } }
  };
  var data = {
    labels: ['January','February','March','April','May','June','July'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: $.brandDanger,
        borderWidth: 2,
        data: [65, 59, 84, 84, 51, 55, 40]
      },
    ]
  };
  var ctx = $('#chart-6');
  var Chart6 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  var options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display:false,
        points:false,
      }],
      yAxes: [{
        display:false,
      }]
    },
    elements: { point: { radius: 0 } }
  };
  var data = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        borderWidth: 2,
        data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9, 9, 17, 34, 22, 11]
      },
    ]
  };
  var ctx = $('.chart-7');
  var Chart7 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  var ctx = $('.chart-7-2');
  var Chart72 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  var ctx = $('.chart-7-3');
  var Chart73 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  var ctx = $('.chart-7-4');
  var Chart74 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });


  var options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display:false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display:false,
        ticks: {
          beginAtZero: true,
        }
      }]
    },
  };
  var data = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
    datasets: [
      {
        backgroundColor: 'rgba(0,0,0,.2)',
        data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9, 9, 17, 34, 22, 11]
      },
    ]
  };
  var ctx = $('.chart-8');
  var Chart8 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });

  var ctx = $('.chart-8-2');
  var Chart82 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });

  var ctx = $('.chart-8-3');
  var Chart83 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });

  var ctx = $('.chart-8-4');
  var Chart84 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });


  var options = {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 10,
          maxRotation: 0,
        },
        barPercentage: 0.6,
      }],
      yAxes: [{
        display:false,
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  };
  var data = {
    labels: ['M','T','W','T','F','S','S'],
    datasets: [
      {
        backgroundColor: $.grayLight,
        data: [17, 34, 22, 11, 3, 15, 12]
      },
    ]
  };
  var ctx = $('.chart-9');
  var Chart9 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });

  var ctx = $('.chart-9-2');
  var Chart92 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });

  var ctx = $('.chart-9-3');
  var Chart93 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });

  var ctx = $('.chart-9-4');
  var Chart94 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });


  var options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display:false,
      }],
      yAxes: [{
        display:false,
      }]
    },
    elements: {
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
  };
  var data = {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: $.grayLighter,
        pointBackgroundColor: '#fff',
        borderWidth: 3,
        data: [75, 59, 94, 104, 151, 155, 240]
      },
    ]
  };
  var ctx = $('#chart-10');
  var Chart10 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });


  var options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontColor: '#fff',
          maxTicksLimit: 3,
          maxRotation: 0,
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(255,255,255,.2)',
          zeroLineColor: 'rgba(255,255,255,.2)'
        },
        ticks: {
          maxTicksLimit: 10,
          stepSize: Math.ceil(45000 / 10),
          max: 45000,
          fontColor: '#fff',
          callback: function(value) {
            return '$' + value;
          }
        }
      }]
    },
    elements: {
      point: {
        radius: 4,
        borderWidth: 2,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
  };
  var data = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 2,
        pointBackgroundColor: $.brandPrimary,
        data: [31000, 34000, 27000, 24000, 28000, 42500, 42000, 30000, 35500, 35500, 41500, 41600]
      },
    ]
  };
  var ctx = $('#chart-11').get(0).getContext('2d');
  var Chart11 = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });


  var options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          maxRotation: 0,
        },
        barPercentage: 0.6,
      }],
      yAxes: [{
        display:false,
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  };
  var data = {
    labels: ['US','PL','GB','DE','NL','CA','FI', 'RU', 'AU', 'N/A'],
    datasets: [
      {
        backgroundColor: $.brandSuccess,
        data: [35, 14, 10, 8, 6, 6, 5, 4, 3, 9]
      },
    ]
  };
  var ctx = $('#chart-12').get(0).getContext('2d');
  var Chart12 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });


  var opts1 = {
    lines: 12,
    angle: 0.15,
    lineWidth: 0.44,
    pointer: {
      length: 0.8,
      strokeWidth: 0.035,
      color: $.grayDark
    },
    limitMax: 'false',
    colorStart: $.brandInfo,
    colorStop: $.brandInfo,
    strokeColor: $.grayLighter,
    generateGradient: true,
    responsive: true,
  };
  var target = document.getElementById('gauge1'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts1); // create sexy gauge!
  gauge.maxValue = 3000; // set max gauge value
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(random(0,3000)); // set actual value

  var opts2 = {
    lines: 12,
    angle: 0.15,
    lineWidth: 0.44,
    pointer: {
      length: 0.8,
      strokeWidth: 0.035,
      color: $.grayDark
    },
    limitMax: 'false',
    colorStart: $.brandSuccess,
    colorStop: $.brandSuccess,
    strokeColor: $.grayLighter,
    generateGradient: true,
    responsive: true,
  };
  var target = document.getElementById('gauge2'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts2); // create sexy gauge!
  gauge.maxValue = 3000; // set max gauge value
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(random(0,3000)); // set actual value

  var opts3 = {
    lines: 12,
    angle: 0.15,
    lineWidth: 0.44,
    pointer: {
      length: 0.8,
      strokeWidth: 0.035,
      color: $.grayDark
    },
    limitMax: 'false',
    colorStart: $.brandWarning,
    colorStop: $.brandWarning,
    strokeColor: $.grayLighter,
    generateGradient: true,
    responsive: true,
  };
  var target = document.getElementById('gauge3'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts3); // create sexy gauge!
  gauge.maxValue = 3000; // set max gauge value
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(random(0,3000)); // set actual value

  var opts4 = {
    lines: 12,
    angle: 0.15,
    lineWidth: 0.44,
    pointer: {
      length: 0.8,
      strokeWidth: 0.035,
      color: $.grayDark
    },
    limitMax: 'false',
    colorStart: $.brandDanger,
    colorStop: $.brandDanger,
    strokeColor: $.grayLighter,
    generateGradient: true,
    responsive: true,
  };
  var target = document.getElementById('gauge4'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts4); // create sexy gauge!
  gauge.maxValue = 3000; // set max gauge value
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(random(0,3000)); // set actual value

})
