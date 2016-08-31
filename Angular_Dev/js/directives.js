angular
    .module('app')
    .directive('a', preventClickDirective)
    .directive('a', bootstrapCollapseDirective)
    .directive('a', navigationDirective)
    .directive('nav', sidebarNavDynamicResizeDirective)
    .directive('button', layoutToggleDirective)
    .directive('a', layoutToggleDirective)
    .directive('button', collapseMenuTogglerDirective)
    .directive('div', bootstrapCarouselDirective)
    .directive('toggle', bootstrapTooltipsPopoversDirective)
    .directive('tab', bootstrapTabsDirective)
    .directive('button', cardCollapseDirective)
    .directive('vamiddle', verticalAlignMiddleDirective)

//Prevent click if href="#"
function preventClickDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (attrs.href === '#'){
            element.on('click', function(event){
                event.preventDefault();
            });
        }
    }
}

//Bootstrap Collapse
function bootstrapCollapseDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (attrs.toggle=='collapse'){
            element.attr('href','javascript;;').attr('data-target',attrs.href.replace('index.html',''));
        }
    }
}

/**
* @desc Genesis main navigation - Siedebar menu
* @example <li class="nav-item nav-dropdown"></li>
*/
function navigationDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if(element.hasClass('nav-dropdown-toggle') && angular.element('body').hasClass('sidebar-nav') && angular.element('body').width() > 782) {
            element.on('click', function(){
                if(!angular.element('body').hasClass('compact-nav')) {
                    element.parent().toggleClass('open').find('.open').removeClass('open');
                }
            });
        } else if (element.hasClass('nav-dropdown-toggle') && angular.element('body').width() < 783) {
            element.on('click', function(){
                element.parent().toggleClass('open').find('.open').removeClass('open');
            });
        }
    }
}

//Dynamic resize .sidebar-nav
sidebarNavDynamicResizeDirective.$inject = ['$window', '$timeout'];
function sidebarNavDynamicResizeDirective($window, $timeout) {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {

        if (element.hasClass('sidebar-nav') && angular.element('body').hasClass('fixed-nav')) {
            var bodyHeight = angular.element(window).height();
            scope.$watch(function(){
                var headerHeight = angular.element('header').outerHeight();

                if (angular.element('body').hasClass('sidebar-off-canvas')) {
                    element.css('height', bodyHeight);
                } else {
                    element.css('height', bodyHeight - headerHeight);
                }
            })

            angular.element($window).bind('resize', function(){
                var bodyHeight = angular.element(window).height();
                var headerHeight = angular.element('header').outerHeight();
                var sidebarHeaderHeight = angular.element('.sidebar-header').outerHeight();
                var sidebarFooterHeight = angular.element('.sidebar-footer').outerHeight();

                if (angular.element('body').hasClass('sidebar-off-canvas')) {
                    element.css('height', bodyHeight - sidebarHeaderHeight - sidebarFooterHeight);
                } else {
                    element.css('height', bodyHeight - headerHeight - sidebarHeaderHeight - sidebarFooterHeight);
                }
            });
        }
    }
}

//LayoutToggle
layoutToggleDirective.$inject = ['$interval'];
function layoutToggleDirective($interval) {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        element.on('click', function(){

            var bodyClass = localStorage.getItem('body-class');

            if ((element.hasClass('layout-toggler') || element.hasClass('sidebar-close')) && angular.element('body').hasClass('sidebar-off-canvas')) {
                angular.element('body').toggleClass('sidebar-opened').parent().toggleClass('sidebar-opened');

                $interval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 100, 5)

            } else if (element.hasClass('layout-toggler') && (angular.element('body').hasClass('sidebar-nav') || bodyClass == 'sidebar-nav')) {
                angular.element('body').toggleClass('sidebar-nav');
                localStorage.setItem('body-class', 'sidebar-nav');
                if (bodyClass == 'sidebar-nav') {
                    localStorage.clear();
                }

                $interval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 100, 5)
            }

            if (element.hasClass('aside-toggle')) {
                angular.element('body').toggleClass('aside-menu-open');

                $interval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 100, 5)
            }
        });
    }
}

//Collapse menu toggler
function collapseMenuTogglerDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        element.on('click', function(){
            if (element.hasClass('navbar-toggler') && !element.hasClass('layout-toggler')) {
                angular.element('body').toggleClass('mobile-open')
            }
        })
    }
}

//Bootstrap Carousel
function bootstrapCarouselDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (attrs.ride=='carousel'){
            element.find('a').each(function(){
                $(this).attr('data-target',$(this).attr('href').replace('index.html','')).attr('href','javascript;;')
            });
        }
    }
}

//Bootstrap Tooltips & Popovers
function bootstrapTooltipsPopoversDirective() {
    var directive = {
        restrict: 'A',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (attrs.toggle=='tooltip'){
            angular.element(element).tooltip();
        }
        if (attrs.toggle=='popover'){
            angular.element(element).popover();
        }
    }
}

//Bootstrap Tabs
function bootstrapTabsDirective() {
    var directive = {
        restrict: 'A',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        element.click(function(e) {
            e.preventDefault();
            angular.element(element).tab('show');
        });
    }
}

//Card Collapse
function cardCollapseDirective() {
    var directive = {
        restrict: 'E',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        if (attrs.toggle=='collapse' && element.parent().hasClass('card-actions')){

            if (element.parent().parent().parent().find('.card-block').hasClass('in')) {
                element.find('i').addClass('r180');
            }

            var id = 'collapse-' + Math.floor((Math.random() * 1000000000) + 1);
            element.attr('data-target','#'+id)
            element.parent().parent().parent().find('.card-block').attr('id',id);

            element.on('click', function(){
                element.find('i').toggleClass('r180');
            })
        }
    }
}

verticalAlignMiddleDirective.$inject = ['$window'];
function verticalAlignMiddleDirective($window) {
    var directive = {
        restrict: 'A',
        link: link
    }
    return directive;

    function link(scope, element, attrs) {
        var bodyHeight = angular.element(window).height();
        var formHeight = element.height();
        var marginTop = (bodyHeight / 2) - (formHeight / 2);

        if (marginTop > 0) {
            element.css('margin-top', marginTop);
        }

        angular.element($window).bind('resize', function(){
            var bodyHeight = angular.element(window).height();
            var formHeight = element.height();
            var marginTop = (bodyHeight / 2) - (formHeight / 2);

            if (marginTop > 0) {
                element.css('margin-top', marginTop);
            }

            scope.$digest();
        });
    }
}
