import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Ngx-Quill
import { QuillModule } from 'ngx-quill'

//Routing
import { TextEditorsRoutingModule } from './text-editors-routing.module';

import { TextEditorsComponent } from './text-editors.component';

@NgModule({
  imports: [
    FormsModule,
    TextEditorsRoutingModule,
    QuillModule
  ],
  declarations: [
    TextEditorsComponent
  ]
})
export class TextEditorsModule { }
