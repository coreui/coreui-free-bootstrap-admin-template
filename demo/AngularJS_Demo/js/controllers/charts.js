//chart.js
angular
.module('app')
.controller('LineCtrl', LineCtrl)
.controller('BarCtrl', BarCtrl)
.controller('DoughnutCtrl', DoughnutCtrl)
.controller('RadarCtrl', RadarCtrl)
.controller('PieCtrl', PieCtrl)
.controller('PolarAreaCtrl', PolarAreaCtrl)

LineCtrl.$inject = ['$scope'];
function LineCtrl($scope) {
  $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
}

BarCtrl.$inject = ['$scope'];
function BarCtrl($scope) {
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
}

DoughnutCtrl.$inject = ['$scope'];
function DoughnutCtrl($scope) {
  $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  $scope.data = [300, 500, 100];
}

RadarCtrl.$inject = ['$scope'];
function RadarCtrl($scope) {
  $scope.labels =['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  $scope.data = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];
}

PieCtrl.$inject = ['$scope'];
function PieCtrl($scope) {
  $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  $scope.data = [300, 500, 100];
}

PolarAreaCtrl.$inject = ['$scope'];
function PolarAreaCtrl($scope) {
  $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Tele Sales', 'Corporate Sales'];
  $scope.data = [300, 500, 100, 40, 120];
}
