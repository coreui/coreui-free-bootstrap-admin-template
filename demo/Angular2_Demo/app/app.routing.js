"use strict";
var router_1 = require('@angular/router');
//Layouts
var full_layout_component_1 = require('./layouts/full-layout.component');
var simple_layout_component_1 = require('./layouts/simple-layout.component');
//Main view
var dashboard_component_1 = require('./dashboard/dashboard.component');
//Components
var buttons_component_1 = require('./components/buttons.component');
var cards_component_1 = require('./components/cards.component');
var forms_component_1 = require('./components/forms.component');
var social_buttons_component_1 = require('./components/social-buttons.component');
var switches_component_1 = require('./components/switches.component');
var tables_component_1 = require('./components/tables.component');
//Icons
var font_awesome_component_1 = require('./icons/font-awesome.component');
var simple_line_icons_component_1 = require('./icons/simple-line-icons.component');
//Widgets
var widgets_component_1 = require('./widgets/widgets.component');
//Charts
var charts_component_1 = require('./charts/charts.component');
//Pages
var _404_component_1 = require('./pages/404.component');
var _500_component_1 = require('./pages/500.component');
var login_component_1 = require('./pages/login.component');
var register_component_1 = require('./pages/register.component');
var appRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: full_layout_component_1.FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                component: dashboard_component_1.DashboardComponent,
                data: {
                    title: 'Dashboard'
                }
            },
            {
                path: 'components',
                redirectTo: 'components/buttons',
                pathMatch: 'full',
            },
            {
                path: 'components',
                data: {
                    title: 'Components'
                },
                children: [
                    {
                        path: 'buttons',
                        component: buttons_component_1.ButtonsComponent,
                        data: {
                            title: 'Buttons'
                        }
                    },
                    {
                        path: 'cards',
                        component: cards_component_1.CardsComponent,
                        data: {
                            title: 'Cards'
                        }
                    },
                    {
                        path: 'forms',
                        component: forms_component_1.FormsComponent,
                        data: {
                            title: 'Forms'
                        }
                    },
                    {
                        path: 'social-buttons',
                        component: social_buttons_component_1.SocialButtonsComponent,
                        data: {
                            title: 'Social buttons'
                        }
                    },
                    {
                        path: 'switches',
                        component: switches_component_1.SwitchesComponent,
                        data: {
                            title: 'Switches'
                        }
                    },
                    {
                        path: 'tables',
                        component: tables_component_1.TablesComponent,
                        data: {
                            title: 'Tables'
                        }
                    }
                ]
            },
            {
                path: 'icons',
                redirectTo: 'icons/font-awesome',
                pathMatch: 'full',
            },
            {
                path: 'icons',
                data: {
                    title: 'Icons'
                },
                children: [
                    {
                        path: 'font-awesome',
                        component: font_awesome_component_1.FontAwesomeComponent,
                        data: {
                            title: 'Font Awesome'
                        }
                    },
                    {
                        path: 'simple-line-icons',
                        component: simple_line_icons_component_1.SimpleLineIconsComponent,
                        data: {
                            title: 'Simple Line Icons'
                        }
                    }
                ]
            },
            {
                path: 'widgets',
                component: widgets_component_1.WidgetsComponent,
                data: {
                    title: 'Widgets'
                }
            },
            {
                path: 'charts',
                component: charts_component_1.ChartsComponent,
                data: {
                    title: 'Charts'
                }
            }
        ]
    },
    {
        path: 'pages',
        component: simple_layout_component_1.SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '404',
                component: _404_component_1.p404Component,
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: '500',
                component: _500_component_1.p500Component,
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'login',
                component: login_component_1.LoginComponent,
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'register',
                component: register_component_1.RegisterComponent,
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map