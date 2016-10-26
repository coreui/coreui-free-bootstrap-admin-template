import { NgModule }                 from '@angular/core';

import { ButtonsComponent }         from './buttons.component';
import { CardsComponent }           from './cards.component';
import { FormsComponent }           from './forms.component';
import { SocialButtonsComponent }   from './social-buttons.component';
import { SwitchesComponent }        from './switches.component';
import { TablesComponent }          from './tables.component';

// Tabs Component
import { TabsModule }               from 'ng2-bootstrap/components/tabs';
import { TabsComponent }            from './tabs.component';

// Components Routing
import { ComponentsRoutingModule }  from './components-routing.module';

@NgModule({
    imports: [
        ComponentsRoutingModule,
        TabsModule
    ],
    declarations: [
        ButtonsComponent,
        CardsComponent,
        FormsComponent,
        SocialButtonsComponent,
        SwitchesComponent,
        TablesComponent,
        TabsComponent
    ]
})
export class ComponentsModule { }
