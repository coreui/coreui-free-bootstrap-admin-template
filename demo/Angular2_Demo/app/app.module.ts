import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';

import { AppComponent }                 from './app.component';
import { DROPDOWN_DIRECTIVES }          from 'ng2-bootstrap/ng2-bootstrap';
import { routing }                      from './app.routing';

//Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';
import { SimpleLayoutComponent }        from './layouts/simple-layout.component';

//Main view
import { DashboardComponent }           from './dashboard/dashboard.component';

//Components
import { ButtonsComponent }             from './components/buttons.component';
import { CardsComponent }               from './components/cards.component';
import { FormsComponent }               from './components/forms.component';
import { SocialButtonsComponent }       from './components/social-buttons.component';
import { SwitchesComponent }            from './components/switches.component';
import { TablesComponent }              from './components/tables.component';

//Icons
import { FontAwesomeComponent }         from './icons/font-awesome.component';
import { SimpleLineIconsComponent }     from './icons/simple-line-icons.component';

//Widgets
import { WidgetsComponent }             from './widgets/widgets.component';

//Charts
import { ChartsComponent }              from './charts/charts.component';

//Pages
import { p404Component }                from './pages/404.component';
import { p500Component }                from './pages/500.component';
import { LoginComponent }               from './pages/login.component';
import { RegisterComponent }            from './pages/register.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    DROPDOWN_DIRECTIVES,
    FullLayoutComponent,
    SimpleLayoutComponent,
    DashboardComponent,
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    FontAwesomeComponent,
    SimpleLineIconsComponent,
    WidgetsComponent,
    ChartsComponent,
    p404Component,
    p500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
