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
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var nav_dropdown_directive_1 = require('./../shared/nav-dropdown.directive');
var sidebar_directive_1 = require('./../shared/sidebar.directive');
var aside_directive_1 = require('./../shared/aside.directive');
var breadcrumb_component_1 = require('./../shared/breadcrumb.component');
var FullLayoutComponent = (function () {
    function FullLayoutComponent(router) {
        this.router = router;
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    FullLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: 'app/layouts/full-layout.component.html',
            directives: [nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES, ng2_bootstrap_1.TAB_DIRECTIVES, sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES, aside_directive_1.AsideToggleDirective, breadcrumb_component_1.BreadcrumbsComponent],
            providers: [ng2_bootstrap_1.TabsetComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());
exports.FullLayoutComponent = FullLayoutComponent;
//# sourceMappingURL=full-layout.component.js.map