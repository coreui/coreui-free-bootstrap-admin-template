import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar-form',
  templateUrl: './app-sidebar-form.component.html'
})
export class AppSidebarForm {

  constructor(private el: ElementRef) { }

  //wait for the component to render completely
  ngOnInit(): void {
    var nativeElement: HTMLElement = this.el.nativeElement,
    parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
}
