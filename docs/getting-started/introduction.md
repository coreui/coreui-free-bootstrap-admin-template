---
layout: docs
title: Introduction
group: getting-started
redirect_from: "/getting-started/"
---

CoreUI - UI Admin Kit is not just another Admin Template. It goes way beyond hitherto admin templates thanks to transparent code and file structure. And if it’s not enough, let’s just add the CoreUI consists bunch of unique features and over 1000 high quality icons.,

CoreUI based on Bootstrap 4 and offers 5 versions: HTML5, AJAX, AngularJS, Angular2 and React.

CoreUI is meant to be the UX game changer. Pure & transparent code is devoid of redundant components, so the app is light enough to offer ultimate user experience. This means also mobile devices, where the navigation is the same easy and intuitive as in desktop or laptop. CoreUI Layout API lets you customize your project for almost any device – be it Mobile, Web or WebApp – CoreUI covers them all!

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Bootstrap

Bootstrap is the world's most popular framework for building responsive, mobile-first sites and applications. Inside you'll find high quality HTML, CSS, and JavaScript to make starting any project easier than ever.

Here's how to quickly get started with the Bootstrap CDN and a template starter page.

## AngularJS

AngularJS lets you write client-side web applications as if you had a smarter browser. It lets you use good old HTML (or HAML, Jade and friends!) as your template language and lets you extend HTML’s syntax to express your application’s components clearly and succinctly. It automatically synchronizes data from your UI (view) with your JavaScript objects (model) through 2-way data binding. To help you structure your application better and make it easy to test, AngularJS teaches the browser how to do dependency injection and inversion of control.

Oh yeah and it helps with server-side communication, taming async callbacks with promises and deferreds. It also makes client-side navigation and deeplinking with hashbang urls or HTML5 pushState a piece of cake. Best of all?? It makes development fun!

* Web site: http://angularjs.org
* Tutorial: http://docs.angularjs.org/tutorial
* API Docs: http://docs.angularjs.org/api
* Developer Guide: http://docs.angularjs.org/guide
* Dashboard: http://dashboard.angularjs.org

## Angular 2

Angular is a development platform for building mobile and desktop web applications.

## React

React is a JavaScript library for building user interfaces.

* **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native/).

[Learn how to use React in your own project](https://facebook.github.io/react/docs/getting-started.html).

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means:

* Using an HTML5 doctype
* Forcing Internet Explorer to use its latest rendering mode ([read more](http://stackoverflow.com/q/6771258))
* And, utilizing the viewport meta tag.

Put it all together and your pages should look like this:

### HTML5 Static Version

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="...">
  <meta name="author" content="Łukasz Holeczek">
  <meta name="keyword" content="Bootstrap,Admin,Template,Open,Source,AngularJS,Angular,Angular2,jQuery,CSS,HTML,RWD,Dashboard">
  <link rel="shortcut icon" href="img/favicon.png">

  <title>...</title>

  <!-- Icons -->
  <link href="css/font-awesome.min.css" rel="stylesheet">
  <link href="css/simple-line-icons.css" rel="stylesheet">

  <!-- Main styles for this application -->
  <link href="css/style.css" rel="stylesheet">
</head>

<!-- BODY options, add following classes to body to change options

// Header options
1. '.header-fixed'		- Fixed Header

// Sidebar options
1. '.sidebar-fixed'		- Fixed Sidebar
2. '.sidebar-hidden'		- Hidden Sidebar
3. '.sidebar-off-canvas'	- Off Canvas Sidebar
4. '.sidebar-compact'		- Compact Sidebar Navigation (Only icons)

// Aside options
1. '.aside-menu-fixed'		- Fixed Aside Menu
2. '.aside-menu-hidden'		- Hidden Aside Menu
3. '.aside-menu-off-canvas'- Off Canvas Aside Menu

// Footer options
1. 'footer-fixed'		- Fixed footer

-->

<body class="app">
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler hidden-lg-up" type="button">☰</button>
    <a class="navbar-brand" href="#"></a>
    <ul class="nav navbar-nav hidden-md-down">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler" href="#">☰</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">...</a>
      </li>
    </ul>
  </header>
  <div class="app-body">
    <div class="sidebar">
      <nav class="sidebar-nav">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html"><i class="icon-speedometer"></i> Dashboard <span class="badge badge-info">NEW</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="...">...</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main content -->
    <main class="main">
      <!-- Breadcrumb -->
      <ol class="breadcrumb">
        ...
      </ol>
      <div class="container-fluid">
        ...
      </div>
    </main>

    <aside class="aside-menu">
      ...
    </aside>

  </div>

  <footer class="app-footer">
    ...
  </footer>

  <!-- Bootstrap and necessary plugins -->
  <script src="js/libs/jquery.min.js"></script>
  <script src="js/libs/tether.min.js"></script>
  <script src="js/libs/bootstrap.min.js"></script>
  <script src="js/libs/pace.min.js"></script>

  <!-- Main scripts -->
  <script src="js/app.js"></script>

  <!-- Plugins and scripts required by this views -->
  <script src="..."></script>

  <!-- Custom scripts required by this view -->
  <script src="..."></script>

</body>
</html>
{% endhighlight %}

### AJAX Version

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="...">
  <meta name="author" content="Łukasz Holeczek">
  <meta name="keyword" content="Bootstrap,Admin,Template,Open,Source,AngularJS,Angular,Angular2,jQuery,CSS,HTML,RWD,Dashboard">
  <link rel="shortcut icon" href="img/favicon.png">

  <title>...</title>

  <!-- Icons -->
  <link href="css/font-awesome.min.css" rel="stylesheet">
  <link href="css/simple-line-icons.css" rel="stylesheet">

  <!-- Main styles for this application -->
  <link href="css/style.css" rel="stylesheet">
</head>

<!-- BODY options, add following classes to body to change options

// Header options
1. '.header-fixed'		- Fixed Header

// Sidebar options
1. '.sidebar-fixed'		- Fixed Sidebar
2. '.sidebar-hidden'		- Hidden Sidebar
3. '.sidebar-off-canvas'	- Off Canvas Sidebar
4. '.sidebar-compact'		- Compact Sidebar Navigation (Only icons)

// Aside options
1. '.aside-menu-fixed'		- Fixed Aside Menu
2. '.aside-menu-hidden'		- Hidden Aside Menu
3. '.aside-menu-off-canvas'- Off Canvas Aside Menu

// Footer options
1. 'footer-fixed'		- Fixed footer

-->

<body class="app">
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler hidden-lg-up" type="button">☰</button>
    <a class="navbar-brand" href="#"></a>
    <ul class="nav navbar-nav hidden-md-down">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler" href="#">☰</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">...</a>
      </li>
    </ul>
  </header>
  <div class="app-body">
    <div class="sidebar">
      <nav class="sidebar-nav">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html"><i class="icon-speedometer"></i> Dashboard <span class="badge badge-info">NEW</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="...">...</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main content -->
    <main class="main">
      <!-- Breadcrumb -->
      <ol class="breadcrumb">
        ...
      </ol>
      <div class="container-fluid">
        <div id="ui-view"></div>
      </div>
    </main>

    <aside class="aside-menu">
      ...
    </aside>

  </div>

  <footer class="app-footer">
    ...
  </footer>

  <!-- Bootstrap and necessary plugins -->
  <script src="js/libs/jquery.min.js"></script>
  <script src="js/libs/tether.min.js"></script>
  <script src="js/libs/bootstrap.min.js"></script>
  <script src="js/libs/pace.min.js"></script>

  <!-- Main scripts -->
  <script src="js/app.js"></script>

</body>
</html>
{% endhighlight %}

### AngularJS Version

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="...">
  <meta name="author" content="Łukasz Holeczek">
  <meta name="keyword" content="Bootstrap,Admin,Template,Open,Source,AngularJS,Angular,Angular2,jQuery,CSS,HTML,RWD,Dashboard">
  <link rel="shortcut icon" href="img/favicon.png">

  <title>...</title>

  <!-- Icons -->
  <link href="css/font-awesome.min.css" rel="stylesheet">
  <link href="css/simple-line-icons.css" rel="stylesheet">

  <!-- Main styles for this application -->
  <link href="css/style.css" rel="stylesheet">
</head>

<!-- BODY options, add following classes to body to change options

// Header options
1. '.header-fixed'		- Fixed Header

// Sidebar options
1. '.sidebar-fixed'		- Fixed Sidebar
2. '.sidebar-hidden'		- Hidden Sidebar
3. '.sidebar-off-canvas'	- Off Canvas Sidebar
4. '.sidebar-compact'		- Compact Sidebar Navigation (Only icons)

// Aside options
1. '.aside-menu-fixed'		- Fixed Aside Menu
2. '.aside-menu-hidden'		- Hidden Aside Menu
3. '.aside-menu-off-canvas'- Off Canvas Aside Menu

// Footer options
1. 'footer-fixed'		- Fixed footer

-->

<body class="app">

  <!-- User Interface -->
  <ui-view></ui-view>

  <!-- Bootstrap and necessary plugins -->
  <script src="js/libs/jquery.min.js"></script>
  <script src="js/libs/tether.min.js"></script>
  <script src="js/libs/bootstrap.min.js"></script>

  <!-- AngularJS -->
  <script src="js/libs/angular.min.js"></script>

  <!-- AngularJS plugins -->
  <script src="js/libs/angular-ui-router.min.js"></script>
  <script src="js/libs/ocLazyLoad.min.js"></script>
  <script src="js/libs/angular-breadcrumb.min.js"></script>
  <script src="js/libs/loading-bar.min.js"></script>

  <!-- AngularJS App scripts -->
  <script src="js/app.js"></script>
  <script src="js/routes.js"></script>
  <script src="js/demo/routes.js"></script>
  <script src="js/controllers.js"></script>
  <script src="js/directives.js"></script>
</body>
</html>
{% endhighlight %}

### Angular 2 Version

###### index.html

{% highlight html %}
<!doctype html>
<html>
<head>
  <base href="./">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="...">
  <meta name="author" content="Łukasz Holeczek">
  <meta name="keyword" content="...">
  <link rel="shortcut icon" href="assets/img/favicon.png">

  <title>%THEMENAME% - %THEMEDESC%</title>

  <!-- Icons -->
  <link href="assets/css/font-awesome.min.css" rel="stylesheet">
  <link href="assets/css/simple-line-icons.css" rel="stylesheet">

</head>

<!-- BODY options, add following classes to body to change options

// Header options
1. '.header-fixed'		- Fixed Header

// Sidebar options
1. '.sidebar-fixed'		- Fixed Sidebar
2. '.sidebar-hidden'		- Hidden Sidebar
3. '.sidebar-off-canvas'	- Off Canvas Sidebar
4. '.sidebar-compact'		- Compact Sidebar Navigation (Only icons)

// Aside options
1. '.aside-menu-fixed'		- Fixed Aside Menu
2. '.aside-menu-hidden'		- Hidden Aside Menu
3. '.aside-menu-off-canvas'- Off Canvas Aside Menu

// Footer options
1. 'footer-fixed'		- Fixed footer

-->

<body class="app">
  <!-- App Loading... -->
</body>

</html>
{% endhighlight %}

###### full-layout.component.html

{% highlight html %}
<header class="app-header navbar">
  <button class="navbar-toggler mobile-sidebar-toggler hidden-lg-up" type="button">&#9776;</button>
  <a class="navbar-brand" href="#"></a>
  <!-- remove:seed -->
  <ul class="nav navbar-nav hidden-md-down">
    <li class="nav-item">
      <a class="nav-link navbar-toggler sidebar-toggler" href="#">&#9776;</a>
    </li>
    <li class="nav-item px-1">
      <a class="nav-link" href="#">...</a>
    </li>
  </ul>
  <ul class="nav navbar-nav ml-auto">
    <li class="nav-item hidden-md-down">
      <a class="nav-link" href="#">...</a>
    </li>
    <li class="nav-item hidden-md-down">
      <a class="nav-link navbar-toggler aside-menu-toggler" href="#">&#9776;</a>
    </li>
  </ul>
  <!-- /remove:seed -->
</header>

<div class="app-body">
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" [routerLink]="['/dashboard']"><i class="icon-speedometer"></i> Dashboard <span class="badge badge-info">NEW</span></a>
        </li>
      </ul>  
    </nav>
  </div>

  <!-- Main content -->
  <main class="main">

    <!-- Breadcrumb -->
    <ol class="breadcrumb">
      <breadcrumbs></breadcrumbs>
    </ol>

    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div><!-- /.conainer-fluid -->
  </main>

  <aside class="aside-menu">
    ...
  </aside>
</div>

<footer class="app-footer">
  ...
</footer>

{% endhighlight %}

That's all you need for overall page requirements.

### HTML5 doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

### Responsive meta tag

Bootstrap is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{% endhighlight %}

You can see an example of this in action in the [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

{% highlight scss %}
.selector-for-some-widget {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}
{% endhighlight %}

With the above snippet, nested elements—including generated content via `:before` and `:after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Normalize.css

For improved cross-browser rendering, we use [Normalize.css](http://necolas.github.io/normalize.css/) to correct small inconsistencies across browsers and devices. We further build on this with our own, slightly more opinionated styles with [Reboot]({{ site.baseurl }}/docs/content/reboot/).
