---
layout: docs
title: Widgets
group: new-components
---

...

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Type 1

{% example html %}
<div class="row">
  <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-block">
          <div class="h4 m-a-0">89.9%</div>
          <div class="p-b-1">Lorem ipsum...</div>
          <progress class="progress progress-xs progress-success" value="25" max="100">25%</progress>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </div>
      </div>
    </div><!--/col-->
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-block">
          <div class="h4 m-a-0">12.124</div>
          <div class="p-b-1">Lorem ipsum...</div>
          <progress class="progress progress-xs progress-info" value="25" max="100">25%</progress>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </div>
      </div>
    </div><!--/col-->
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-block">
          <div class="h4 m-a-0">$98.111,00</div>
          <div class="p-b-1">Lorem ipsum...</div>
          <progress class="progress progress-xs progress-warning" value="25" max="100">25%</progress>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </div>
      </div>
    </div><!--/col-->
    <div class="col-sm-6 col-lg-3">
      <div class="card">
        <div class="card-block">
          <div class="h4 m-a-0">2 TB</div>
          <div class="p-b-1">Lorem ipsum...</div>
          <progress class="progress progress-xs progress-danger" value="25" max="100">25%</progress>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </div>
      </div>
    </div><!--/col-->
  </div><!--/row-->
{% endexample %}

## Type 2

{% example html %}
<div class="row">
  <div class="col-sm-6 col-lg-3">
    <div class="card card-inverse card-primary">
      <div class="card-block">
        <div class="h4 m-a-0">89.9%</div>
        <div class="p-b-1">Lorem ipsum...</div>
        <progress class="progress progress-xs progress-success" value="25" max="100">25%</progress>
        <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
      </div>
    </div>
  </div><!--/col-->
  <div class="col-sm-6 col-lg-3">
    <div class="card card-inverse card-warning">
      <div class="card-block">
        <div class="h4 m-a-0">12.124</div>
        <div class="p-b-1">Lorem ipsum...</div>
        <progress class="progress progress-xs progress-info" value="25" max="100">25%</progress>
        <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
      </div>
    </div>
  </div><!--/col-->
  <div class="col-sm-6 col-lg-3">
    <div class="card card-inverse card-danger">
      <div class="card-block">
        <div class="h4 m-a-0">$98.111,00</div>
        <div class="p-b-1">Lorem ipsum...</div>
        <progress class="progress progress-xs progress-warning" value="25" max="100">25%</progress>
        <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
      </div>
    </div>
  </div><!--/col-->
  <div class="col-sm-6 col-lg-3">
    <div class="card card-inverse card-info">
      <div class="card-block">
        <div class="h4 m-a-0">2 TB</div>
        <div class="p-b-1">Lorem ipsum...</div>
        <progress class="progress progress-xs progress-danger" value="25" max="100">25%</progress>
        <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
      </div>
    </div>
  </div><!--/col-->
</div><!--/row-->
{% endexample %}

## Type 3

{% example html %}
<div class="row">
  <div class="col-md-2 col-sm-4">
    <div class="card">
      <div class="card-block text-xs-center">
        <div class="text-muted small text-uppercase font-weight-bold">Title</div>
        <div class="h2 p-y-1">1,123</div>
        <div class="chart-wrapper">
          <canvas id="chart-1" class="chart chart-bar" height="40" width="80"></canvas>
        </div>
      </div>
    </div>
  </div><!--/col-->
  <div class="col-md-2 col-sm-4">
    <div class="card">
      <div class="card-block text-xs-center">
        <div class="text-muted small text-uppercase font-weight-bold">Title</div>
        <div class="h2 p-y-1">1,123</div>
        <div class="chart-wrapper">
          <canvas id="chart-2" class="chart chart-bar" height="40" width="80"></canvas>
        </div>
      </div>
    </div>
  </div><!--/col-->
  <div class="col-md-2 col-sm-4">
    <div class="card">
      <div class="card-block text-xs-center">
        <div class="text-muted small text-uppercase font-weight-bold">Title</div>
        <div class="h2 p-y-1">1,123</div>
        <div class="chart-wrapper">
          <canvas id="chart-3" class="chart chart-bar" height="40" width="80"></canvas>
        </div>
      </div>
    </div>
  </div><!--/col-->
  <div class="col-md-2 col-sm-4">
    <div class="card">
      <div class="card-block text-xs-center">
        <div class="text-muted small text-uppercase font-weight-bold">Title</div>
        <div class="h2 p-y-1">1,123</div>
        <div class="chart-wrapper">
          <canvas id="chart-4" class="chart chart-line" height="40" width="100"></canvas>
        </div>
      </div>
    </div>
  </div><!--/col-->
  <div class="col-md-2 col-sm-4">
    <div class="card">
      <div class="card-block text-xs-center">
        <div class="text-muted small text-uppercase font-weight-bold">Title</div>
        <div class="h2 p-y-1">1,123</div>
        <div class="chart-wrapper">
          <canvas id="chart-5" class="chart chart-line" height="40" width="100"></canvas>
        </div>
      </div>
    </div>
  </div><!--/col-->
  <div class="col-md-2 col-sm-4">
    <div class="card">
      <div class="card-block text-xs-center">
        <div class="text-muted small text-uppercase font-weight-bold">Title</div>
        <div class="h2 p-y-1">1,123</div>
        <div class="chart-wrapper">
          <canvas id="chart-6" class="chart chart-line" height="40" width="100"></canvas>
        </div>
      </div>
    </div>
  </div><!--/col-->
</div><!--/row-->
{% endexample %}

## Type 4

{% example html %}
<div class="row">
  <div class="col-xs-6 col-lg-3">
    <div class="card">
      <div class="card-block p-a-1 clearfix">
        <i class="fa fa-cogs bg-primary p-a-1 font-2xl m-r-1 pull-left"></i>
        <div class="h5 text-primary m-b-0 m-t-h">$1.999,50</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
      </div>
    </div>
  </div><!--/.col-->
  <div class="col-xs-6 col-lg-3">
    <div class="card">
      <div class="card-block p-a-1 clearfix">
        <i class="fa fa-laptop bg-info p-a-1 font-2xl m-r-1 pull-left"></i>
        <div class="h5 text-info m-b-0 m-t-h">$1.999,50</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
      </div>
    </div>
  </div><!--/.col-->
  <div class="col-xs-6 col-lg-3">
    <div class="card">
      <div class="card-block p-a-1 clearfix">
        <i class="fa fa-moon-o bg-warning p-a-1 font-2xl m-r-1 pull-left"></i>
        <div class="h5 text-warning m-b-0 m-t-h">$1.999,50</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
      </div>
    </div>
  </div><!--/.col-->
  <div class="col-xs-6 col-lg-3">
    <div class="card">
      <div class="card-block p-a-1 clearfix">
        <i class="fa fa-bell bg-danger p-a-1 font-2xl m-r-1 pull-left"></i>
        <div class="h5 text-danger m-b-0 m-t-h">$1.999,50</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
      </div>
    </div>
  </div><!--/.col-->
</div><!--/.row-->
{% endexample %}

## Type 4

{% example html %}
<div class="row">
  <div class="col-xs-6 col-lg-3">
    <div class="card">
      <div class="card-block p-a-1 clearfix">
        <i class="fa fa-cogs bg-primary p-a-1 font-2xl m-r-1 pull-left"></i>
        <div class="h5 text-primary m-b-0 m-t-h">$1.999,50</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
      </div>
      <div class="card-footer p-x-1 p-y-h">
        <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right pull-right font-lg"></i></a>
      </div>
    </div>
  </div><!--/.col-->
  <div class="col-xs-6 col-lg-3">
    <div class="card">
      <div class="card-block p-a-1 clearfix">
        <i class="fa fa-laptop bg-info p-a-1 font-2xl m-r-1 pull-left"></i>
        <div class="h5 text-info m-b-0 m-t-h">$1.999,50</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
      </div>
      <div class="card-footer p-x-1 p-y-h">
        <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right pull-right font-lg"></i></a>
      </div>
    </div>
  </div><!--/.col-->
  <div class="col-xs-6 col-lg-3">
    <div class="card">
      <div class="card-block p-a-1 clearfix">
        <i class="fa fa-moon-o bg-warning p-a-1 font-2xl m-r-1 pull-left"></i>
        <div class="h5 text-warning m-b-0 m-t-h">$1.999,50</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
      </div>
      <div class="card-footer p-x-1 p-y-h">
        <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right pull-right font-lg"></i></a>
      </div>
    </div>
  </div><!--/.col-->
  <div class="col-xs-6 col-lg-3">
    <div class="card">
      <div class="card-block p-a-1 clearfix">
        <i class="fa fa-bell bg-danger p-a-1 font-2xl m-r-1 pull-left"></i>
        <div class="h5 text-danger m-b-0 m-t-h">$1.999,50</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
      </div>
      <div class="card-footer p-x-1 p-y-h">
        <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right pull-right font-lg"></i></a>
      </div>
    </div>
  </div><!--/.col-->
</div><!--/.row-->
{% endexample %}

## Type 5

{% example html %}
<div class="row">
  <div class="col-md-3 col-sm-6">
    <div class="social-box facebook">
      <i class="fa fa-facebook"></i>
      <ul>
        <li>
          <strong>89k</strong>
          <span>friends</span>
        </li>
        <li>
          <strong>459</strong>
          <span>feeds</span>
        </li>
      </ul>
    </div><!--/social-box-->
  </div><!--/col-->
  <div class="col-md-3 col-sm-6">
    <div class="social-box twitter">
      <i class="fa fa-twitter"></i>
      <ul>
        <li>
          <strong>973k</strong>
          <span>followers</span>
        </li>
        <li>
          <strong>1.792</strong>
          <span>tweets</span>
        </li>
      </ul>
    </div><!--/social-box-->
  </div><!--/col-->
  <div class="col-md-3 col-sm-6">
    <div class="social-box linkedin">
      <i class="fa fa-linkedin"></i>
      <ul>
        <li>
          <strong>500+</strong>
          <span>contacts</span>
        </li>
        <li>
          <strong>292</strong>
          <span>feeds</span>
        </li>
      </ul>
    </div><!--/social-box-->
  </div><!--/col-->
  <div class="col-md-3 col-sm-6">
    <div class="social-box google-plus">
      <i class="fa fa-google-plus"></i>
      <ul>
        <li>
          <strong>894</strong>
          <span>followers</span>
        </li>
        <li>
          <strong>92</strong>
          <span>circles</span>
        </li>
      </ul>
    </div><!--/social-box-->
  </div><!--/col-->
</div><!--/row-->
{% endexample %}

## Type 6

{% example html %}
<div class="card-group m-b-1">
  <div class="card">
    <div class="card-block">
      <div class="h1 text-muted text-xs-right m-b-2">
        <i class="icon-people"></i>
      </div>
      <div class="h4 m-b-0">87.500</div>
      <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
      <progress class="progress progress-xs progress-info m-t-1 m-b-0" value="25" max="100">25%</progress>
    </div>
  </div>
  <div class="card">
    <div class="card-block">
      <div class="h1 text-muted text-xs-right m-b-2">
        <i class="icon-user-follow"></i>
      </div>
      <div class="h4 m-b-0">385</div>
      <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
      <progress class="progress progress-xs progress-success m-t-1 m-b-0" value="25" max="100">25%</progress>
    </div>
  </div>
  <div class="card">
    <div class="card-block">
      <div class="h1 text-muted text-xs-right m-b-2">
        <i class="icon-basket-loaded"></i>
      </div>
      <div class="h4 m-b-0">1238</div>
      <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
      <progress class="progress progress-xs progress-warning m-t-1 m-b-0" value="25" max="100">25%</progress>
    </div>
  </div>
  <div class="card">
    <div class="card-block">
      <div class="h1 text-muted text-xs-right m-b-2">
        <i class="icon-pie-chart"></i>
      </div>
      <div class="h4 m-b-0">28%</div>
      <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
      <progress class="progress progress-xs progress-primary m-t-1 m-b-0" value="25" max="100">25%</progress>
    </div>
  </div>
  <div class="card">
    <div class="card-block">
      <div class="h1 text-muted text-xs-right m-b-2">
        <i class="icon-speedometer"></i>
      </div>
      <div class="h4 m-b-0">5:34:11</div>
      <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
      <progress class="progress progress-xs progress-danger m-t-1 m-b-0" value="25" max="100">25%</progress>
    </div>
  </div>
</div>
{% endexample %}

## Type 7

{% example html %}
<div class="row">
  <div class="col-sm-6 col-md-2">
    <div class="card">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-people"></i>
        </div>
        <div class="h4 m-b-0">87.500</div>
        <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
        <progress class="progress progress-xs progress-info m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-2">
    <div class="card">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-user-follow"></i>
        </div>
        <div class="h4 m-b-0">385</div>
        <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
        <progress class="progress progress-xs progress-success m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-2">
    <div class="card">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-basket-loaded"></i>
        </div>
        <div class="h4 m-b-0">1238</div>
        <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
        <progress class="progress progress-xs progress-warning m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-2">
    <div class="card">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-pie-chart"></i>
        </div>
        <div class="h4 m-b-0">28%</div>
        <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
        <progress class="progress progress-xs progress-primary m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-2">
    <div class="card">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-speedometer"></i>
        </div>
        <div class="h4 m-b-0">5:34:11</div>
        <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
        <progress class="progress progress-xs progress-danger m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-2">
    <div class="card">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-speech"></i>
        </div>
        <div class="h4 m-b-0">972</div>
        <small class="text-muted text-uppercase font-weight-bold">Comments</small>
        <progress class="progress progress-xs progress-info m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Type 8

{% example html %}
<div class="row">
  <div class="col-sm-6 col-md-2">
    <div class="card card-inverse card-info">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-people"></i>
        </div>
        <div class="h4 m-b-0">87.500</div>
        <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
        <progress class="progress progress-xs progress-info m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-2">
    <div class="card card-inverse card-success">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-user-follow"></i>
        </div>
        <div class="h4 m-b-0">385</div>
        <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
        <progress class="progress progress-xs progress-success m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-2">
    <div class="card card-inverse card-warning">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-basket-loaded"></i>
        </div>
        <div class="h4 m-b-0">1238</div>
        <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
        <progress class="progress progress-xs progress-warning m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-2">
    <div class="card card-inverse card-primary">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-pie-chart"></i>
        </div>
        <div class="h4 m-b-0">28%</div>
        <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
        <progress class="progress progress-xs progress-primary m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-2">
    <div class="card card-inverse card-danger">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-speedometer"></i>
        </div>
        <div class="h4 m-b-0">5:34:11</div>
        <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
        <progress class="progress progress-xs progress-danger m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-2">
    <div class="card card-inverse card-info">
      <div class="card-block">
        <div class="h1 text-muted text-xs-right m-b-2">
          <i class="icon-speech"></i>
        </div>
        <div class="h4 m-b-0">972</div>
        <small class="text-muted text-uppercase font-weight-bold">Comments</small>
        <progress class="progress progress-xs progress-info m-t-1 m-b-0" value="25" max="100">25%</progress>
      </div>
    </div>
  </div>
</div>
{% endexample %}
