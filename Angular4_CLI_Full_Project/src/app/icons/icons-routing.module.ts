import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeComponent } from './font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Icons'
    },
    children: [
      {
        path: 'font-awesome',
        component: FontAwesomeComponent,
        data: {
          title: 'Font Awesome'
        }
      },
      {
        path: 'simple-line-icons',
        component: SimpleLineIconsComponent,
        data: {
          title: 'Simple Line Icons'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule {}
