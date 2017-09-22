import { Component } from '@angular/core';

@Component({
  templateUrl: 'loading-buttons.component.html'
})
export class LoadingButtonsComponent {
  // trigger-variable for Ladda
  isLoading: boolean = false;

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
