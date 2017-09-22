import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextEditorsComponent } from './text-editors.component';

const routes: Routes = [
  {
    path: '',
    component: TextEditorsComponent,
    data: {
      title: 'Text Editors'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextEditorsRoutingModule {}
