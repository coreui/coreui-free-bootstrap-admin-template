import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Invoice
import { InvoiceComponent } from './invoice.component';

//Routing
import { InvoiceRoutingModule } from './invoice-routing.module';
//
@NgModule({
  imports: [
    InvoiceRoutingModule,
    CommonModule,
  ],
  declarations: [
    InvoiceComponent
  ]
})
export class InvoiceModule { }
