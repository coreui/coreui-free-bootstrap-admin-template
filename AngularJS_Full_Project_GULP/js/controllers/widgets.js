//widgets.js
angular
.module('app')
.controller('cardChartCtrl1', cardChartCtrl1)
.controller('cardChartCtrl2', cardChartCtrl2)
.controller('cardChartCtrl3', cardChartCtrl3)
.controller('cardChartCtrl4', cardChartCtrl4)
.controller('cardChartCtrl5', cardChartCtrl5)
.controller('cardChartCtrl6', cardChartCtrl6)
.controller('cardChartCtrl7', cardChartCtrl7)
.controller('cardChartCtrl8', cardChartCtrl8)
.controller('cardChartCtrl9', cardChartCtrl9)
.controller('cardChartCtrl10', cardChartCtrl10)
.controller('cardChartCtrl11', cardChartCtrl11)
.controller('cardChartCtrl12', cardChartCtrl12)
.controller('cardChartCtrl13', cardChartCtrl13)

//convert Hex to RGBA
function convertHex(hex,opacity){
  hex = hex.replace('#','');
  r = parseInt(hex.substring(0,2), 16);
  g = parseInt(hex.substring(2,4), 16);
  b = parseInt(hex.substring(4,6), 16);

  result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  return result;
}

cardChartCtrl1.$inject = ['$scope'];
function cardChartCtrl1($scope) {

  $scope.labels = ['January','February','March','April','May','June','July'];
  $scope.data = [
    [65, 59, 84, 84, 51, 55, 40]
  ];
  $scope.colors = [{
    backgroundColor: brandPrimary,
    borderColor: 'rgba(255,255,255,.55)',
  }];
  $scope.options = {
    maintainAspectRatio: false,
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
          min: Math.min.apply(Math, $scope.data[0]) - 5,
          max: Math.max.apply(Math, $scope.data[0]) + 5,
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
    },
  }
}

cardChartCtrl2.$inject = ['$scope'];
function cardChartCtrl2($scope) {

  $scope.labels = ['January','February','March','April','May','June','July'];
  $scope.data = [
    [1, 18, 9, 17, 34, 22, 11]
  ];
  $scope.colors = [{
    backgroundColor: brandInfo,
    borderColor: 'rgba(255,255,255,.55)',
  }];
  $scope.options = {
    maintainAspectRatio: false,
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
          min: Math.min.apply(Math, $scope.data[0]) - 5,
          max: Math.max.apply(Math, $scope.data[0]) + 5
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

    },
  }
}

cardChartCtrl3.$inject = ['$scope'];
function cardChartCtrl3($scope) {

  $scope.labels = ['January','February','March','April','May','June','July'];
  $scope.data = [
    [78, 81, 80, 45, 34, 12, 40]
  ];
  $scope.data4 = [
    [35, 23, 56, 22, 97, 23, 64]
  ];
  $scope.colors = [{
    backgroundColor: 'rgba(255,255,255,.2)',
    borderColor: 'rgba(255,255,255,.55)',
  }];
  $scope.options = {
    maintainAspectRatio: false,
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
        hoverRadius: 4,
      },
    },
  }
}

function random(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

cardChartCtrl4.$inject = ['$scope'];
function cardChartCtrl4($scope) {

  var elements = 16;
  var labels = [];
  var data = [];
  //
  for (var i = 2000; i <= 2000 + elements; i++) {
    labels.push(i);
    data.push(random(40,100));
  }

  $scope.labels = labels;

  $scope.data = [data];

  $scope.colors = [{
    backgroundColor: 'rgba(255,255,255,.3)',
    borderWidth: 0
  }];
  $scope.options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false
      }]
    },
  }
}

cardChartCtrl5.$inject = ['$scope'];
function cardChartCtrl5($scope) {

  var elements = 15;
  var labels = [];
  var data = [];

  for (var i = 0; i <= elements; i++) {
    labels.push(i);
    data.push(random(40,100));
  }

  $scope.labels = labels;

  $scope.data = [data];

  $scope.colors = [{
    backgroundColor: brandPrimary,
    borderColor: 'transparent',
    borderWidth: 1
  }];

  $scope.options = {
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

cardChartCtrl6.$inject = ['$scope'];
function cardChartCtrl6($scope) {

  var elements = 15;
  var labels = [];
  var data = [];

  for (var i = 0; i <= elements; i++) {
    labels.push(i);
    data.push(random(40,100));
  }

  $scope.labels = labels;

  $scope.data = [data];

  $scope.colors = [{
    backgroundColor: brandDanger,
    borderColor: 'transparent',
    borderWidth: 1
  }];

  $scope.options = {
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

cardChartCtrl7.$inject = ['$scope'];
function cardChartCtrl7($scope) {

  var elements = 15;
  var labels = [];
  var data = [];

  for (var i = 0; i <= elements; i++) {
    labels.push(i);
    data.push(random(40,100));
  }

  $scope.labels = labels;

  $scope.data = [data];

  $scope.colors = [{
    backgroundColor: brandSuccess,
    borderColor: 'transparent',
    borderWidth: 1
  }];

  $scope.options = {
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

cardChartCtrl8.$inject = ['$scope'];
function cardChartCtrl8($scope) {

  $scope.labels = ['January','February','March','April','May','June','July'];
  $scope.data = [
    [65, 59, 84, 84, 51, 55, 40]
  ];
  $scope.colors = [{
    backgroundColor: 'transparent',
    borderColor: brandInfo,
  }];
  $scope.options = {
    responsive: false,
    maintainAspectRatio: false,
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
}

cardChartCtrl9.$inject = ['$scope'];
function cardChartCtrl9($scope) {

  $scope.labels = ['January','February','March','April','May','June','July'];
  $scope.data = [
    [65, 59, 84, 84, 51, 55, 40]
  ];
  $scope.colors = [{
    backgroundColor: 'transparent',
    borderColor: brandSuccess,
  }];
  $scope.options = {
    responsive: false,
    maintainAspectRatio: false,
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
}

cardChartCtrl10.$inject = ['$scope'];
function cardChartCtrl10($scope) {

  $scope.labels = ['January','February','March','April','May','June','July'];
  $scope.data = [
    [65, 59, 84, 84, 51, 55, 40]
  ];
  $scope.colors = [{
    backgroundColor: 'transparent',
    borderColor: brandWarning,
  }];
  $scope.options = {
    responsive: false,
    maintainAspectRatio: false,
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
}

cardChartCtrl11.$inject = ['$scope'];
function cardChartCtrl11($scope) {

  $scope.labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  $scope.data = [
    [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9]
  ];

  $scope.colors = [{
    backgroundColor: 'transparent',
    borderColor: 'rgba(255,255,255,.55)',
  }];
  $scope.options = {
    maintainAspectRatio: false,
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

  $scope.colors2 = [{
    backgroundColor: 'rgba(0,0,0,.2)',
    borderWidth: 0
  }];

  $scope.options2 = {
    maintainAspectRatio: false,
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
}

cardChartCtrl12.$inject = ['$scope'];
function cardChartCtrl12($scope) {

  $scope.labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  $scope.data = [
    [75, 59, 94, 104, 151, 155, 240]
  ];
  $scope.colors = [{
    backgroundColor: 'transparent',
    borderColor: grayLighter,
    pointBackgroundColor: '#fff',
    borderWidth: 3,
  }];
  $scope.options = {
    responsive: true,
    maintainAspectRatio: false,
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
}

cardChartCtrl13.$inject = ['$scope'];
function cardChartCtrl13($scope) {

  $scope.labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  $scope.data = [
    [31000, 34000, 27000, 24000, 28000, 42500, 42000, 30000, 35500, 35500, 41500, 41600]
  ];
  $scope.colors = [{
    backgroundColor: 'transparent',
    borderColor: '#fff',
    pointBackgroundColor: brandPrimary,
  }];
  $scope.options = {
    responsive: true,
    maintainAspectRatio: false,
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

  $scope.labels2 = ['US','PL','GB','DE','NL','CA','FI', 'RU', 'AU', 'N/A'];
  $scope.data2 = [
    [35, 14, 10, 8, 6, 6, 5, 4, 3, 9]
  ];

  $scope.colors2 = [{
    backgroundColor: brandSuccess,
    borderWidth: 0,
  }];
  $scope.options2 = {
    responsive: true,
    maintainAspectRatio: false,
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
    },
  }
}
