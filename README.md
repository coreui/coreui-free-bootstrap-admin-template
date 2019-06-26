# BackStrap - Free HTML Admin Template, using Bootstrap 4

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

We've added our learnings from 10+ years of building admins to the [CoreUI HTML template](https://github.com/coreui/coreui-free-bootstrap-admin-template) (which we considered the best starting point for admin panel HTML in 2019). Now, we can build good-looking admin panels using Bootstrap 4, just by copy-pasting HTML blocks.

Uses:
- CoreUI
- Bootstrap 4
- jQuery

Can be used inside [Backpack for Laravel 4](https://backpackforlaravel.com) (due July 2019), or outside of it.


![Demo Dashboard view of BackStrap Free HTML Template for Admin Panels](https://backpackforlaravel.com/uploads/v4/backpack4ui.jpg)

## Preview

// TODO: link soon

## How to Use

If you don't think you'll need to customize its look&feel, we recommend you use our minified files directly. **Click Download** and use our files in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Your Page Title</title>
    <!-- Icons-->
    <link href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css" rel="stylesheet">
    <link href="../node_modules/@coreui/icons/css/coreui-icons.min.css" rel="stylesheet">
    <link href="../node_modules/flag-icon-css/css/flag-icon.min.css" rel="stylesheet">
    <link href="../node_modules/simple-line-icons/css/simple-line-icons.css" rel="stylesheet">
    <!-- CoreUI styles-->
    <link href="css/style.css" rel="stylesheet">
    <link href="vendors/pace-progress/css/pace.min.css" rel="stylesheet">
    <!-- Backpack style on top-->
    <link href="css/backstrap.css" rel="stylesheet">
  </head>
  <body class="app aside-menu-fixed sidebar-lg-show">
    
    <!--   YOUR CONTENT HERE   -->
    
    <!-- CoreUI and necessary plugins-->
    <script src="../node_modules/jquery/dist/jquery.min.js"></script>
    <script src="../node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../node_modules/pace-progress/pace.min.js"></script>
    <script src="../node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js"></script>
    <script src="../node_modules/@coreui/coreui/dist/js/coreui.min.js"></script>
    <!-- Plugins and scripts required by this view-->
    <script src="../node_modules/chart.js/dist/Chart.min.js"></script>
    <script src="../node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/js/custom-tooltips.min.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

## Installation

> Only if you need to change the design. If you're happy with our look & feel, read _How to use_ above.

If you want to change how it looks or works, install the theme on your machine, change whatever you want, then re-compile it.

``` bash
# clone the repo
$ git clone https://github.com/Laravel-Backpack/BackStrap.git custom-backstrap

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install

# serve with hot reload at localhost:3000.
$ npm run serve

# build for production with minification
$ npm run build
```

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
backstrap/
├── build/
├── src/
│   ├── css/
│   ├── img/
│   ├── js/
│   ├── scss/
│   ├── vendors/
│   ├── ...
│   ├── index.html
│   └── ...
└── package.json
```

After you've run ```npm run build``` you'll also find a ```dist``` folder in the root. That's the one you should copy to your project, to use what's inside it.


## Documentation

TODO: soon

Until then, you can check out the documentation for the CoreUI Free Bootstrap Admin Template, which is what this HTML template uses underneath. It's hosted at their website [CoreUI](https://coreui.io/)


## Contributing

This template is just [one CSS file](https://github.com/Laravel-Backpack/BackStrap/blob/master/src/css/backstrap.css) added on top of CoreUI.

If you encounter any bugs that are NOT design-related, please [submit a ticket to the CoreUI repository](https://github.com/coreui/coreui-free-bootstrap-admin-template). We regularly merge their new releases. So all fix there will shortly be pulled into BackStrap.


## Support Development

This HTML Template is just a layer on top of [CoreUI](https://coreui.io/), that customizes how it looks & feels. They've done the heavy lifting, so your and I don't have to. To show your gratitude for this free HTML template, please consider:
- buying [CoreUI Pro](https://coreui.io/pro/) or [donating through PayPal](https://www.paypal.me/holeczek) to holeczek, the creator of CoreUI;
- buying a [Backpack for Laravel](https://backpackforlaravel.com/) license;
