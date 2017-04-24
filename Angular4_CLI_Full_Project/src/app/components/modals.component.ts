import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
  templateUrl: 'modals.component.html'
})
export class ModalsComponent {
    public myModal;
    public largeModal;
    public smallModal;
    public primaryModal;
    public successModal;
    public warningModal;
    public dangerModal;
    public infoModal;
}
