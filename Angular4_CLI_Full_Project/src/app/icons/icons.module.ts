import { NgModule } from '@angular/core';

import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';

import { IconsRoutingModule } from './icons-routing.module';

@NgModule({
  imports: [ IconsRoutingModule ],
  declarations: [
    FontAwesomeComponent,
    SimpleLineIconsComponent
  ]
})
export class IconsModule { }
