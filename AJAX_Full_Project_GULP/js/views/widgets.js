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

  for (var i = 2000; i <= 2000 + elements; i++) {
    labels.push(i);
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
    labels.push(i);
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
    labels.push(i);
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
    labels.push(i);
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
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        borderWidth: 2,
        data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9]
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
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        backgroundColor: 'rgba(0,0,0,.2)',
        data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9]
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
})
