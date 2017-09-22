import { Component } from '@angular/core';
import { ToasterModule, ToasterService, ToasterConfig }  from 'angular2-toaster/angular2-toaster';

@Component({
  templateUrl: 'notifications.component.html'
})
export class NotificationsComponent {

  private toasterService: ToasterService;

  public toasterconfig : ToasterConfig =
    new ToasterConfig({
      tapToDismiss: true,
      timeout: 5000
    });

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  showSuccess() {
    this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
  }

  showError() {
    this.toasterService.pop('error', 'Error Toaster', 'This is toaster description');
  }

  showWarning() {
    this.toasterService.pop('warning', 'Warning Toaster', 'This is toaster description');
  }

  showInfo() {
    this.toasterService.pop('info', 'Info Toaster', 'This is toaster description');
  }

  showPrimary() {
    this.toasterService.pop('primary', 'Primary Toaster', 'This is toaster description');
  }

}
