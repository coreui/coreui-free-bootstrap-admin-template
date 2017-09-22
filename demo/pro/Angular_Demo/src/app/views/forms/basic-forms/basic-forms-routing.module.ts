import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormsComponent } from './basic-forms.component';

const routes: Routes = [
  {
    path: '',
    component: BasicFormsComponent,
    data: {
      title: 'Basic Forms'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicFormsRoutingModule {}
