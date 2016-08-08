---
layout: docs
title: Breadcrumb menu
group: new-components
---

{% example html %}
<ol class="breadcrumb">
  <li class="breadcrumb-item active">Home</li>
  <!-- Breadcrumb Menu-->
  <li class="breadcrumb-menu">
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <a class="btn btn-secondary" href="#"><i class="icon-speech"></i></a>
      <a class="btn btn-secondary" href="./"><i class="icon-graph"></i> &nbsp;Dashboard</a>
      <a class="btn btn-secondary" href="#"><i class="icon-settings"></i> &nbsp;Settings</a>
    </div>
  </li>
</ol>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item active">Library</li>
  <!-- Breadcrumb Menu-->
  <li class="breadcrumb-menu">
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <a class="btn btn-secondary" href="#"><i class="icon-speech"></i></a>
      <a class="btn btn-secondary" href="./"><i class="icon-graph"></i> &nbsp;Dashboard</a>
      <a class="btn btn-secondary" href="#"><i class="icon-settings"></i> &nbsp;Settings</a>
    </div>
  </li>
</ol>
<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Library</a></li>
  <li class="breadcrumb-item active">Data</li>
  <!-- Breadcrumb Menu-->
  <li class="breadcrumb-menu">
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <a class="btn btn-secondary" href="#"><i class="icon-speech"></i></a>
      <a class="btn btn-secondary" href="./"><i class="icon-graph"></i> &nbsp;Dashboard</a>
      <a class="btn btn-secondary" href="#"><i class="icon-settings"></i> &nbsp;Settings</a>
    </div>
  </li>
</ol>
{% endexample %}

{% example html %}
<nav class="breadcrumb">
  <a class="breadcrumb-item" href="#">Home</a>
  <a class="breadcrumb-item" href="#">Library</a>
  <a class="breadcrumb-item" href="#">Data</a>
  <span class="breadcrumb-item active">Bootstrap</span>
  <!-- Breadcrumb Menu-->
  <div class="breadcrumb-menu">
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <a class="btn btn-secondary" href="#"><i class="icon-speech"></i></a>
      <a class="btn btn-secondary" href="./"><i class="icon-graph"></i> &nbsp;Dashboard</a>
      <a class="btn btn-secondary" href="#"><i class="icon-settings"></i> &nbsp;Settings</a>
    </div>
  </div>
</nav>
{% endexample %}
