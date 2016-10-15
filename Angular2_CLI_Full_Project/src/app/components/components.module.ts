import { NgModule }                 from '@angular/core';

import { ButtonsComponent }         from './buttons.component';
import { CardsComponent }           from './cards.component';
import { FormsComponent }           from './forms.component';
import { SocialButtonsComponent }   from './social-buttons.component';
import { SwitchesComponent }        from './switches.component';
import { TablesComponent }          from './tables.component';

import { ComponentsRoutingModule }  from './components-routing.module';

@NgModule({
    imports: [ ComponentsRoutingModule ],
    declarations: [
        ButtonsComponent,
        CardsComponent,
        FormsComponent,
        SocialButtonsComponent,
        SwitchesComponent,
        TablesComponent
    ]
})
export class ComponentsModule { }
