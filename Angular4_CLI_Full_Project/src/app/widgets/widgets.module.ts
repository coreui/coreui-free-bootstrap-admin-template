import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';

@NgModule({
  imports: [
    WidgetsRoutingModule,
    ChartsModule
  ],
  declarations: [ WidgetsComponent ]
})
export class WidgetsModule { }
