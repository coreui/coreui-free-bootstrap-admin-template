//forms.js
angular
.module('app')
//dateRangePicker controller
.controller('dateRangeCtrl', dateRangeCtrl)

dateRangeCtrl.$inject = ['$scope'];
function dateRangeCtrl($scope) {
  $scope.date = {
    startDate: moment().subtract(5, 'days'),
    endDate: moment()
  };
  $scope.opts = {
    drops: 'down',
    opens: 'left',
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 days': [moment().subtract(7, 'days'), moment()],
      'Last 30 days': [moment().subtract(30, 'days'), moment()],
      'This month': [moment().startOf('month'), moment().endOf('month')]
    }
  };

  //Watch for date changes
  $scope.$watch('date', function(newDate) {
  }, false);
}
