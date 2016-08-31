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
require('rxjs/add/operator/filter');
var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    };
    BreadcrumbsComponent = __decorate([
        core_1.Component({
            selector: 'breadcrumbs',
            template: "\n    <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs; let last = last\" [ngClass]=\"{active: last}\">\n    <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n    <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>"
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());
exports.BreadcrumbsComponent = BreadcrumbsComponent;
//# sourceMappingURL=breadcrumb.component.js.map