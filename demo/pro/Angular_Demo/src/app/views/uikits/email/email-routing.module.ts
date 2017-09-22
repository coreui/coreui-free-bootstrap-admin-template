import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComposeComponent } from './compose.component';
import { InboxComponent } from './inbox.component';
import { MessageComponent } from './message.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Email App'
    },
    children: [
      {
        path: 'compose',
        component: ComposeComponent,
        data: {
          title: 'Compose'
        }
      },
      {
        path: 'inbox',
        component: InboxComponent,
        data: {
          title: 'Inbox'
        }
      },
      {
        path: 'message',
        component: MessageComponent,
        data: {
          title: 'Message'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule {}
