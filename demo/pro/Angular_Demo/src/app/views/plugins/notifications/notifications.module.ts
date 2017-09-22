import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Notifications
import { ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

import { NotificationsComponent } from './notifications.component';

//Routing
import { NotificationsRoutingModule } from './notifications-routing.module';

@NgModule({
  imports: [
    NotificationsRoutingModule,
    CommonModule,
    ToasterModule,
  ],
  declarations: [
    NotificationsComponent
  ]
})
export class NotificationsModule { }
