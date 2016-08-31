import { Component } from '@angular/core';
import { NAV_DROPDOWN_DIRECTIVES }  from './shared/nav-dropdown.directive';

@Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>',
    directives: [ NAV_DROPDOWN_DIRECTIVES ]
})
export class AppComponent { }
