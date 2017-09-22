import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Spinners
import { SpinnersComponent } from './spinners.component';

//Routing
import { SpinnersRoutingModule } from './spinners-routing.module';
//
@NgModule({
  imports: [
    SpinnersRoutingModule,
    CommonModule,
  ],
  declarations: [
    SpinnersComponent
  ]
})
export class SpinnersModule { }
