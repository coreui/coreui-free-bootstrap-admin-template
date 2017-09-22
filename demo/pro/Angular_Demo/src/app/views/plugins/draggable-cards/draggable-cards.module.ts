import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

// Spinners
import { DraggableCardsComponent } from './draggable-cards.component';

//Routing
import { DraggableCardsRoutingModule } from './draggable-cards-routing.module';
//
@NgModule({
  imports: [
    DraggableCardsRoutingModule,
    CommonModule,
    DragulaModule
  ],
  declarations: [
    DraggableCardsComponent
  ]
})
export class DraggableCardsModule { }
