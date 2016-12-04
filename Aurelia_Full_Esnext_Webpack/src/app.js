import {Router, RouterConfiguration} from "aurelia-router";
import {AuthenticateStep} from "aurelia-authentication";
import {relativeToFile} from "aurelia-path";
import {Origin} from "aurelia-metadata";
import {
  inject,
  Container,
  ViewSlot,
  ViewLocator,
  customElement,
  noView,
  CompositionTransaction,
  CompositionEngine
} from "aurelia-framework";

@inject(Router, CompositionEngine)
export class App {
  constructor(router, compositionEngine) {
    this.router = router;
    this.compositionEngine = compositionEngine;
  }

  attached() {
    this.mapNavigation(this.router)
  }

  activate() {
    // console.table(this.router.navigation)
  }

  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.addPipelineStep('authorize', AuthenticateStep);

    config.map([
      // Top menu
      {
        route: 'user',
        name: 'user',
        moduleId: './modules/user/user-section',
        nav: false,
        title: 'User'
      },
      {
        route: 'settings',
        name: 'settings',
        moduleId: './modules/settings/settings',
        nav: false,
        title: 'Settings'
      },

      //Nav menu
      {
        route: ['', 'dashboard'],
        name: 'dashboard',
        moduleId: './modules/dashboard/dashboard',
        nav: true,
        title: 'Dashboard',
        settings: {
          icon: 'icon-speedometer',
          isNew: true
        }
      },

      // Components menu
      {
        route: 'components',
        name: 'components',
        moduleId: './modules/components/components',
        nav: true,
        title: 'Components',
        settings: {
          navTitle: 'UI Elements'
        }
      },

      {
        route: 'components/buttons',
        moduleId: './modules/components/buttons',
        nav: true,
        title: 'Buttons',
        settings: {
          parentRoute: 'components'
        }
      },
      {
        route: 'components/social-buttons',
        moduleId: './modules/components/social-buttons',
        nav: true,
        title: 'Social buttons',
        settings: {
          parentRoute: 'components'
        }
      },
      {
        route: 'components/cards',
        moduleId: './modules/components/cards',
        nav: true,
        title: 'Cards',
        settings: {
          parentRoute: 'components'
        }
      },

      {
        route: 'components/forms',
        moduleId: './modules/components/forms',
        nav: true,
        title: 'Forms',
        settings: {
          parentRoute: 'components'
        }
      },
      {
        route: 'components/switches',
        moduleId: './modules/components/switches',
        nav: true,
        title: 'Switches',
        settings: {
          parentRoute: 'components'
        }
      },
      {
        route: 'components/tables',
        moduleId: './modules/components/tables',
        nav: true,
        title: 'Tables',
        settings: {
          parentRoute: 'components'
        }
      },

      // Icons menu
      {
        route: 'icons',
        name: 'icons',
        moduleId: './modules/icons/icons',
        nav: true,
        title: 'Icons',
        settings: {
          icon: 'icon-star'
        }
      },
      {
        route: 'icons/font-awesome',
        moduleId: './modules/icons/font-awesome',
        nav: true,
        title: 'Font awesome',
        settings: {
          parentRoute: 'icons'
        }
      },
      {
        route: 'icons/simple-line-icons',
        moduleId: './modules/icons/simple-line-icons',
        nav: true,
        title: 'Simple line icons',
        settings: {
          parentRoute: 'icons'
        }
      },

      // Widgets menu
      {
        route: 'widgets',
        name: 'widgets',
        moduleId: './modules/widgets/widgets',
        nav: true,
        title: 'Widgets',
        settings: {
          isNew: true,
          icon: 'icon-calculator'
        }
      },

      // Charts menu
      {
        route: 'charts',
        name: 'charts',
        moduleId: './modules/charts/charts',
        nav: true,
        title: 'Charts',
        settings: {
          icon: 'icon-pie-chart'
        }
      },


      // Pages menu
      {
        route: 'pages',
        name: 'pages',
        moduleId: './modules/pages/pages',
        nav: true,
        title: 'Pages',
        settings: {
          navTitle: 'Extras',
          icon: 'icon-star'
        }
      },


      {
        route: 'pages/register',
        name: 'register',
        moduleId: './modules/pages/register',
        title: 'Register',
        nav: true,
        settings: {
          parentRoute: 'pages'
        }
      },
      {
        route: 'pages/404',
        name: '404',
        moduleId: './modules/pages/page404',
        title: '404',
        nav: true,
        settings: {
          parentRoute: 'pages'
        }
      },
      {
        route: 'pages/500',
        name: '500',
        moduleId: './modules/pages/page500',
        title: '500',
        nav: true,
        settings: {
          parentRoute: 'pages'
        }
      }
      ,
      {
        route: 'pages/login',
        name: 'login',
        moduleId: './modules/pages/login',
        title: 'Login',
        nav: true,
        settings: {
          parentRoute: 'pages'
        }
      }
    ]);

    this.router = router;
  }

  mapNavigation(router) {
    console.log("Map children to navigation items.")
    var menuItems = [];
    router.navigation.forEach(function (menuItem) {
      if (menuItem.settings.parentRoute) {
        // Submenu children
        var parent = menuItems.find(x => x.relativeHref == menuItem.settings.parentRoute);
        // If it doesn't exist, then something went wrong, so not checking
        parent.children.push(menuItem);
      } else {
        // Just insert.  It should not be there multiple times or it's a bad route
        menuItems[menuItem] = menuItems[menuItem] || [];
        // Create empty children
        menuItem.children = [];
        menuItems.push(menuItem);
      }
    });
    return menuItems;
  }
}
