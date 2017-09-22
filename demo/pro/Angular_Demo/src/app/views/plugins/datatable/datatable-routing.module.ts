import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableComponent } from './datatable.component';

const routes: Routes = [
  {
    path: '',
    component: DataTableComponent,
    data: {
      title: 'DataTable'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatatableRoutingModule {}
