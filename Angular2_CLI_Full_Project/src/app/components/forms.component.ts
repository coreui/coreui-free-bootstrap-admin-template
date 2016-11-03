import { Component }        from '@angular/core';

@Component({
    templateUrl: 'forms.component.html'
})
export class FormsComponent {
    items: Array<any> = [
        { id: 1, text: 'Option #1' },
        { id: 2, text: 'Option #2' },
        { id: 3, text: 'Option #3' },
    ];

    items_multiple: Array<any> = [
        { id: 1, text: 'Option #1' },
        { id: 2, text: 'Option #2' },
        { id: 3, text: 'Option #3' },
        { id: 4, text: 'Option #4' },
        { id: 5, text: 'Option #5' },
        { id: 6, text: 'Option #6' },
        { id: 7, text: 'Option #7' },
        { id: 8, text: 'Option #8' },
        { id: 9, text: 'Option #9' },
        { id: 10, text: 'Option #10' },
    ];
    constructor() { }
}
