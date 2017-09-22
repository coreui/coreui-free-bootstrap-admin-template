//sliders.js
angular
.module('app')
.controller('slidersDemoCtrl', slidersDemoCtrl);

slidersDemoCtrl.$inject = ['$scope'];
function slidersDemoCtrl($scope) {
  $scope.range1 = {};
  $scope.range2 = {
    options: {
      min: 100,
      max: 1000,
      from: 550
    }
  }

  $scope.range3 = {
    options: {
      type: 'double',
      grid: true,
      min: 0,
      max: 1000,
      from: 200,
      to: 800,
      prefix: '$'
    }
  }

  $scope.range4 = {
    options: {
      type: 'double',
      grid: true,
      min: -1000,
      max: 1000,
      from: -500,
      to: 500
    }
  }

  $scope.range5 = {
    options: {
      type: 'double',
      grid: true,
      min: -1000,
      max: 1000,
      from: -500,
      to: 500,
      step: 250
    }
  }

  $scope.range6 = {
    options: {
      type: 'double',
      grid: true,
      min: -12.8,
      max: 12.8,
      from: -3.2,
      to: 3.2,
      step: 0.1
    }
  }

  $scope.range7 = {
    options: {
      type: 'double',
      grid: true,
      from: 1,
      to: 5,
      values: [0, 10, 100, 1000, 10000, 100000, 1000000]
    }
  }

  $scope.range8 = {
    options: {
      grid: true,
      from: 5,
      values: [
        'zero', 'one',
        'two', 'three',
        'four', 'five',
        'six', 'seven',
        'eight', 'nine',
        'ten'
      ]
    }
  }

  $scope.range9 = {
    options: {
      grid: true,
      from: 3,
      values: [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
      ]
    }
  }

  $scope.range10 = {
    options: {
      grid: true,
      min: 1000,
      max: 1000000,
      from: 100000,
      step: 1000,
      prettify_enabled: false
    }
  }

  $scope.range11 = {
    options: {
      grid: true,
      min: 1000,
      max: 1000000,
      from: 200000,
      step: 1000,
      prettify_enabled: true
    }
  }

  $scope.range12 = {
    options: {
      grid: true,
      min: 1000,
      max: 1000000,
      from: 300000,
      step: 1000,
      prettify_enabled: true,
      prettify_separator: '.'
    }
  }

  $scope.range13 = {
    options: {
      grid: true,
      min: 1000,
      max: 1000000,
      from: 400000,
      step: 1000,
      prettify_enabled: true,
      prettify: function (num) {
        return (Math.random() * num).toFixed(0);
      }
    }
  }

  $scope.range14 = {
    options: {
      type: 'double',
      grid: true,
      min: 0,
      max: 10000,
      from: 1000,
      step: 9000,
      prefix: '$'
    }
  }

  $scope.range15 = {
    options: {
      type: 'single',
      grid: true,
      min: -90,
      max: 90,
      from: 0,
      postfix: '°'
    }
  }

  $scope.range16 = {
    options: {
      grid: true,
      min: 18,
      max: 70,
      from: 30,
      prefix: 'Age ',
      max_postfix: '+'
    }
  }

  $scope.range17 = {
    options: {
      type: 'double',
      min: 100,
      max: 200,
      from: 145,
      to: 155,
      prefix: 'Weight: ',
      postfix: ' million pounds',
      decorate_both: true
    }
  }

  $scope.range18 = {
    options: {
      type: 'double',
      min: 100,
      max: 200,
      from: 145,
      to: 155,
      prefix: 'Weight: ',
      postfix: ' million pounds',
      decorate_both: false
    }
  }

  $scope.range19 = {
    options: {
      type: 'double',
      min: 100,
      max: 200,
      from: 148,
      to: 152,
      prefix: 'Weight: ',
      postfix: ' million pounds',
      values_separator: ' → '
    }
  }

  $scope.range20 = {
    options: {
      type: 'double',
      min: 100,
      max: 200,
      from: 148,
      to: 152,
      prefix: 'Range: ',
      postfix: ' light years',
      decorate_both: false,
      values_separator: ' to '
    }
  }

  $scope.range21 = {
    options: {
      type: 'double',
      min: 1000,
      max: 2000,
      from: 1200,
      to: 1800,
      hide_min_max: true,
      hide_from_to: true,
      grid: false
    }
  }

  $scope.range22 = {
    options: {
      type: 'double',
      min: 1000,
      max: 2000,
      from: 1200,
      to: 1800,
      hide_min_max: true,
      hide_from_to: true,
      grid: false
    }
  }

  $scope.range23 = {
    options: {
      type: 'double',
      min: 1000,
      max: 2000,
      from: 1200,
      to: 1800,
      hide_min_max: false,
      hide_from_to: true,
      grid: false
    }
  }

  $scope.range24 = {
    options: {
      type: 'double',
      min: 1000,
      max: 2000,
      from: 1200,
      to: 1800,
      hide_min_max: true,
      hide_from_to: false,
      grid: false
    }
  }
}
