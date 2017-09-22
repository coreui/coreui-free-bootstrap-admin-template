import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Plugins'
    },
    children: [
      {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarInitModule'
      },
      {
        path: 'datatable',
        loadChildren: './datatable/datatable.module#DatatableInitModule'
      },
      {
        path: 'draggable-cards',
        loadChildren: './draggable-cards/draggable-cards.module#DraggableCardsModule'
      },
      {
        path: 'loading-buttons',
        loadChildren: './loading-buttons/loading-buttons.module#LoadingButtonsModule'
      },
      {
        path: 'notifications',
        loadChildren: './notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'spinners',
        loadChildren: './spinners/spinners.module#SpinnersModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginsRoutingModule {}
