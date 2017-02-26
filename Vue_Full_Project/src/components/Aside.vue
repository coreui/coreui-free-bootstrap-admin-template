<template>
  <aside class="aside-menu px-2">
    <div class="aside-options">
      <div class="clearfix mt-2">
        <small><b>Option 1</b></small>
        <label class="switch switch-text switch-pill switch-success switch-sm float-right">
          <input type="checkbox" class="switch-input" checked>
          <span class="switch-label" data-on="On" data-off="Off"></span>
          <span class="switch-handle"></span>
        </label>
      </div>
      <div>
        <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
      </div>
    </div>

    <div class="aside-options">
      <div class="clearfix mt-1">
        <small><b>Option 2</b></small>
        <label class="switch switch-text switch-pill switch-success switch-sm float-right">
          <input type="checkbox" class="switch-input">
          <span class="switch-label" data-on="On" data-off="Off"></span>
          <span class="switch-handle"></span>
        </label>
      </div>
      <div>
        <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
      </div>
    </div>

    <div class="aside-options">
      <div class="clearfix mt-1">
        <small><b>Option 3</b></small>
        <label class="switch switch-text switch-pill switch-success switch-sm float-right">
          <input type="checkbox" class="switch-input">
          <span class="switch-label" data-on="On" data-off="Off"></span>
          <span class="switch-handle"></span>
        </label>
      </div>
    </div>

    <div class="aside-options">
      <div class="clearfix mt-1">
        <small><b>Option 4</b></small>
        <label class="switch switch-text switch-pill switch-success switch-sm float-right">
          <input type="checkbox" class="switch-input" checked>
          <span class="switch-label" data-on="On" data-off="Off"></span>
          <span class="switch-handle"></span>
        </label>
      </div>
    </div>

    <hr>
    <h6>System Utilization</h6>

    <div class="text-uppercase mb-q mt-2"><small><b>CPU Usage</b></small></div>
    <div class="progress progress-xs">
      <div class="progress-bar bg-info" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <small class="text-muted">348 Processes. 1/4 Cores.</small>

    <div class="text-uppercase mb-q mt-h"><small><b>Memory Usage</b></small></div>
    <div class="progress progress-xs">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <small class="text-muted">11444GB/16384MB</small>

    <div class="text-uppercase mb-q mt-h"><small><b>SSD 1 Usage</b></small></div>
    <div class="progress progress-xs">
      <div class="progress-bar bg-danger" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <small class="text-muted">243GB/256GB</small>

    <div class="text-uppercase mb-q mt-h"><small><b>SSD 2 Usage</b></small></div>
    <div class="progress progress-xs">
      <div class="progress-bar bg-success" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <small class="text-muted">25GB/256GB</small>
  </aside>
</template>

<script>
export default {
  name: 'aside'
}
</script>
