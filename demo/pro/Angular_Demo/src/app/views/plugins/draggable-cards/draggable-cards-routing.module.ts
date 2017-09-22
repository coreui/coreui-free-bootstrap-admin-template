import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraggableCardsComponent } from './draggable-cards.component';

const routes: Routes = [
  {
    path: '',
    component: DraggableCardsComponent,
    data: {
      title: 'Draggable Cards'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraggableCardsRoutingModule {}
