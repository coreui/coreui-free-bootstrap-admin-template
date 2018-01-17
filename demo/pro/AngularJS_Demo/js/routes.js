angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {

  $urlRouterProvider.otherwise('/dashboard');

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: false
  });

  $breadcrumbProvider.setOptions({
    prefixStateName: 'app.main',
    includeAbstract: true,
    template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
  });

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'views/common/layouts/full.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Root',
      skip: true
    },
    resolve: {
      loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load CSS files
        return $ocLazyLoad.load([{
          serie: true,
          name: 'Flags',
          files: ['vendors/css/flag-icon.min.css']
        },{
          serie: true,
          name: 'Font Awesome',
          files: ['vendors/css/font-awesome.min.css']
        },{
          serie: true,
          name: 'Simple Line Icons',
          files: ['vendors/css/simple-line-icons.min.css']
        }]);
      }],
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([{
          serie: true,
          name: 'chart.js',
          files: [
            'vendors/js/Chart.min.js',
            'vendors/js/angular-chart.min.js'
          ]
        }]);
      }],
    }
  })
  .state('app.main', {
    url: '/dashboard',
    templateUrl: 'views/main.html',
    //page title goes here
    ncyBreadcrumb: {
      label: 'Home',
    },
    //page subtitle goes here
    params: { subtitle: 'Welcome to CoreUI Pro Bootstrap 4 Admin Template' },
    resolve: {
      loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load CSS files
        return $ocLazyLoad.load([{
          serie: true,
          name: 'Toastr',
          files: ['vendors/css/toastr.min.css']
        },{
          serie: true,
          name: 'DateRangePicker',
          files: ['vendors/css/daterangepicker.min.css']
        }]);
      }],
      loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load([
          {
            serie: true,
            name: 'chart.js',
            files: [
              'vendors/js/Chart.min.js',
              'vendors/js/angular-chart.min.js'
            ]
          },
          {
            serie: true,
            files: ['vendors/js/moment.min.js']
          },
          {
            serie: true,
            files: [
              'vendors/js/daterangepicker.min.js',
              'vendors/js/angular-daterangepicker.min.js'
            ]
          },
          {
            files: ['vendors/js/angular-toastr.tpls.min.js']
          }
        ]);
      }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load controllers
        return $ocLazyLoad.load({
          files: ['js/controllers/main.js']
        });
      }]
    }
  })
  .state('appSimple', {
    abstract: true,
    templateUrl: 'views/common/layouts/simple.html',
    resolve: {
      loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load CSS files
        return $ocLazyLoad.load([{
          serie: true,
          name: 'Font Awesome',
          files: ['vendors/css/font-awesome.min.css']
        },{
          serie: true,
          name: 'Simple Line Icons',
          files: ['vendors/css/simple-line-icons.min.css']
        }]);
      }],
    }
  })

  // Additional Pages
  .state('appSimple.login', {
    url: '/login',
    templateUrl: 'views/pages/login.html'
  })
  .state('appSimple.register', {
    url: '/register',
    templateUrl: 'views/pages/register.html'
  })
  .state('appSimple.404', {
    url: '/404',
    templateUrl: 'views/pages/404.html'
  })
  .state('appSimple.500', {
    url: '/500',
    templateUrl: 'views/pages/500.html'
  })

  //UI Kits
  .state('app.uikits', {
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'UI Kits'
    }
  })

  //UI Kits - Invoicing App
  .state('app.uikits.invoicing', {
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Invoicing'
    }
  })
  .state('app.uikits.invoicing.invoice', {
    url: '/uikits/invoicing/invoice',
    templateUrl: 'views/UIkits/invoicing/invoice.html',
    ncyBreadcrumb: {
      label: '{{ "INVOICE" | translate }}'
    }
  })

  //UI Kits - Email App
  .state('app.uikits.email', {
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Email'
    }
  })
  .state('app.uikits.email.inbox', {
    url: '/uikits/email/inbox',
    templateUrl: 'views/UIkits/email/inbox.html',
    ncyBreadcrumb: {
      label: '{{ "INBOX" | translate }}'
    }
  })
  .state('app.uikits.email.message', {
    url: '/uikits/email/message',
    templateUrl: 'views/UIkits/email/message.html',
    ncyBreadcrumb: {
      label: '{{ "INBOX" | translate }}'
    }
  })
  .state('app.uikits.email.compose', {
    url: '/uikits/email/compose',
    templateUrl: 'views/UIkits/email/compose.html',
    ncyBreadcrumb: {
      label: '{{ "INBOX" | translate }}'
    }
  })
}]);
