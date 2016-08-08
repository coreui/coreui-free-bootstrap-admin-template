---
layout: docs
title: Callout
group: new-components
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Without borders

{% example html %}
<div class="row">
  <div class="col-sm-2">
    <div class="callout callout-info">
      <small class="text-muted">New Clients</small><br>
      <strong class="h4">9,123</strong>
    </div>
  </div><!--/.col-->
  <div class="col-sm-2">
    <div class="callout callout-danger">
      <small class="text-muted">Recuring Clients</small><br>
      <strong class="h4">22,643</strong>
    </div>
  </div><!--/.col-->
  <div class="col-sm-2">
    <div class="callout callout-warning">
      <small class="text-muted">Pageviews</small><br>
      <strong class="h4">78,623</strong>
    </div>
  </div><!--/.col-->
  <div class="col-sm-2">
    <div class="callout callout-success">
      <small class="text-muted">Organic</small><br>
      <strong class="h4">49,123</strong>
    </div>
  </div><!--/.col-->
  <div class="col-sm-2">
    <div class="callout">
      <small class="text-muted">CTR</small><br>
      <strong class="h4">23%</strong>
    </div>
  </div><!--/.col-->
  <div class="col-sm-2">
    <div class="callout callout-primary">
      <small class="text-muted">Bounce Rate</small><br>
      <strong class="h4">5%</strong>
    </div>
  </div><!--/.col-->
</div><!--/.row-->
{% endexample %}

## With borders

{% example html %}
<div class="row">
  <div class="col-sm-2">
    <div class="callout callout-info b-t-1 b-r-1 b-b-1 p-y-q">
      <small class="text-muted">New Clients</small><br>
      <strong class="h4">9,123</strong>
    </div>
  </div><!--/.col-->
  <div class="col-sm-2">
    <div class="callout callout-danger b-t-1 b-r-1 b-b-1 p-y-q">
      <small class="text-muted">Recuring Clients</small><br>
      <strong class="h4">22,643</strong>
    </div>
  </div><!--/.col-->
  <div class="col-sm-2">
    <div class="callout callout-warning b-t-1 b-r-1 b-b-1 p-y-q">
      <small class="text-muted">Pageviews</small><br>
      <strong class="h4">78,623</strong>
    </div>
  </div><!--/.col-->
  <div class="col-sm-2">
    <div class="callout callout-success b-t-1 b-r-1 b-b-1 p-y-q">
      <small class="text-muted">Organic</small><br>
      <strong class="h4">49,123</strong>
    </div>
  </div><!--/.col-->
  <div class="col-sm-2">
    <div class="callout b-t-1 b-r-1 b-b-1 p-y-q">
      <small class="text-muted">CTR</small><br>
      <strong class="h4">23%</strong>
    </div>
  </div><!--/.col-->
  <div class="col-sm-2">
    <div class="callout callout-primary b-t-1 b-r-1 b-b-1 p-y-q">
      <small class="text-muted">Bounce Rate</small><br>
      <strong class="h4">5%</strong>
    </div>
  </div><!--/.col-->
</div><!--/.row-->
{% endexample %}
