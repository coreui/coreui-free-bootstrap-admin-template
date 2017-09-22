export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'UI elements',
      wrapper: {            // optional wrapper object
        element: 'span',      // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Components',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Buttons',
          url: '/components/buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Social Buttons',
          url: '/components/social-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/components/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Modals',
          url: '/components/modals',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/components/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/components/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/components/tabs',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Forms',
      url: '/forms',
      icon: 'icon-note',
      children: [
        {
          name: 'Basic Forms',
          url: '/forms/basic-forms',
          icon: 'icon-note'
        },
        {
          name: 'Advanced Forms',
          url: '/forms/advanced-forms',
          icon: 'icon-note'
        },
        {
          name: 'Text Editors',
          url: '/forms/text-editors',
          icon: 'icon-note'
        }
      ]
    },
    {
      name: 'Plugins',
      url: '/plugins',
      icon: 'icon-energy',
      children: [
        {
          name: 'Loading Buttons',
          url: '/plugins/loading-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Spinners',
          url: '/plugins/spinners',
          icon: 'fa fa-spinner'
        },
      ]
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'UI Kits',
      url: '/ui-kits',
      icon: 'icon-layers',
      children: [
        {
          name: 'Invoicing',
          url: '/ui-kits/invoicing',
          icon: 'icon-speech',
          children: [
            {
              name: 'Invoice',
              url: '/ui-kits/invoicing/invoice',
              icon: 'icon-speech'
            }
          ]
        },
        {
          name: 'Email',
          url: '/ui-kits/email',
          icon: 'icon-speech',
          children: [
            {
              name: 'Inbox',
              url: '/ui-kits/email/inbox',
              icon: 'icon-speech'
            },
            {
              name: 'Message',
              url: '/ui-kits/email/message',
              icon: 'icon-speech'
            },
            {
              name: 'Compose',
              url: '/ui-kits/email/compose',
              icon: 'icon-speech'
            }
          ]
        }
      ]
    }
  ]
};
