import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Loading Buttons
import { LaddaModule } from 'angular2-ladda';

import { LoadingButtonsComponent } from './loading-buttons.component';

// Routing
import { LoadingButtonsRoutingModule } from './loading-buttons-routing.module';

@NgModule({
  imports: [
    LoadingButtonsRoutingModule,
    CommonModule,
    LaddaModule
  ],
  declarations: [
    LoadingButtonsComponent
  ]
})
export class LoadingButtonsModule { }
