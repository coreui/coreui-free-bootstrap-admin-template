import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingButtonsComponent } from './loading-buttons.component';

const routes: Routes = [
  {
    path: '',
    component: LoadingButtonsComponent,
    data: {
      title: 'Loading Buttons - Ladda'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingButtonsRoutingModule {}
