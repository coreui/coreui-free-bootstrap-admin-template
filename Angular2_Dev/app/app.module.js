"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var nav_dropdown_directive_1 = require('./shared/nav-dropdown.directive');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var sidebar_directive_1 = require('./shared/sidebar.directive');
var aside_directive_1 = require('./shared/aside.directive');
var breadcrumb_component_1 = require('./shared/breadcrumb.component');
var app_routing_1 = require('./app.routing');
//Layouts
var full_layout_component_1 = require('./layouts/full-layout.component');
var simple_layout_component_1 = require('./layouts/simple-layout.component');
//Main view
var dashboard_component_1 = require('./dashboard/dashboard.component');
//Components
var buttons_component_1 = require('./components/buttons.component');
var cards_component_1 = require('./components/cards.component');
var forms_component_1 = require('./components/forms.component');
var social_buttons_component_1 = require('./components/social-buttons.component');
var switches_component_1 = require('./components/switches.component');
var tables_component_1 = require('./components/tables.component');
//Icons
var font_awesome_component_1 = require('./icons/font-awesome.component');
var simple_line_icons_component_1 = require('./icons/simple-line-icons.component');
//Widgets
var widgets_component_1 = require('./widgets/widgets.component');
//Charts
var charts_component_1 = require('./charts/charts.component');
//Pages
var _404_component_1 = require('./pages/404.component');
var _500_component_1 = require('./pages/500.component');
var login_component_1 = require('./pages/login.component');
var register_component_1 = require('./pages/register.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                ng2_bootstrap_1.Ng2BootstrapModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                full_layout_component_1.FullLayoutComponent,
                simple_layout_component_1.SimpleLayoutComponent,
                dashboard_component_1.DashboardComponent,
                buttons_component_1.ButtonsComponent,
                cards_component_1.CardsComponent,
                forms_component_1.FormsComponent,
                social_buttons_component_1.SocialButtonsComponent,
                switches_component_1.SwitchesComponent,
                tables_component_1.TablesComponent,
                font_awesome_component_1.FontAwesomeComponent,
                simple_line_icons_component_1.SimpleLineIconsComponent,
                widgets_component_1.WidgetsComponent,
                charts_component_1.ChartsComponent,
                _404_component_1.p404Component,
                _500_component_1.p500Component,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
                breadcrumb_component_1.BreadcrumbsComponent,
                ng2_charts_1.CHART_DIRECTIVES,
                sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
                aside_directive_1.AsideToggleDirective
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map