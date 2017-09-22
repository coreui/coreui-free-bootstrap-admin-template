import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceComponent } from './invoice.component';

const routes: Routes = [
  {
    path: 'invoice',
    component: InvoiceComponent,
    data: {
      title: 'Invoice'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {}
