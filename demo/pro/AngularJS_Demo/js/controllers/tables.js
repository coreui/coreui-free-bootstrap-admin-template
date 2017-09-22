//tables.js
angular
.module('app')
.controller('BootstrapIntegrationCtrl', BootstrapIntegrationCtrl);

BootstrapIntegrationCtrl.$inject = ['DTOptionsBuilder', 'DTColumnBuilder'];
function BootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder) {
  var vm = this;
  vm.dtOptions = DTOptionsBuilder
  .fromSource('data.json')
  // Add Bootstrap compatibility
  .withBootstrap()
  .withBootstrapOptions({
    pagination: {
      classes: {
        ul: 'pagination pagination-datatables'
      }
    }
  })
  vm.dtColumns = [
    DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
    DTColumnBuilder.newColumn('firstName').withTitle('First name'),
    DTColumnBuilder.newColumn('lastName').withTitle('Last name')
  ];
}
