import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';

@Component({
    selector: 'app-dashboard',
    template: '<router-outlet></router-outlet>',
})
export class SimpleLayoutComponent implements OnInit {

    constructor( private router: Router ) { }

    ngOnInit(): void { }
}
