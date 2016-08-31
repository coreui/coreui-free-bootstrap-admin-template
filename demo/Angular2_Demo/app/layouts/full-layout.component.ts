import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';
import { DROPDOWN_DIRECTIVES,
         TAB_DIRECTIVES,
         TabsetComponent }              from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES }      from './../shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES }    from './../shared/sidebar.directive';
import { AsideToggleDirective }         from './../shared/aside.directive';
import { BreadcrumbsComponent }         from './../shared/breadcrumb.component';


@Component({
    selector: 'app-dashboard',
    templateUrl: 'app/layouts/full-layout.component.html',
    directives: [ NAV_DROPDOWN_DIRECTIVES, TAB_DIRECTIVES, SIDEBAR_TOGGLE_DIRECTIVES, AsideToggleDirective, BreadcrumbsComponent ],
    providers: [ TabsetComponent ]
})
export class FullLayoutComponent implements OnInit {

    constructor( private router: Router ) { }

    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};

    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    ngOnInit(): void {}
}
