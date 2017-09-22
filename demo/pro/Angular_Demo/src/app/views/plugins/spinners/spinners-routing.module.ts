import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpinnersComponent } from './spinners.component';

const routes: Routes = [
  {
    path: '',
    component: SpinnersComponent,
    data: {
      title: 'Spinners'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpinnersRoutingModule {}
