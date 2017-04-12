<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">404</h1>
            <h4 class="pt-3">Oops! You're lost.</h4>
            <p class="text-muted">The page you are looking for was not found.</p>
          </div>
          <div class="input-prepend input-group">
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
            <input id="prependedInput" class="form-control" size="16" type="text" placeholder="What are you looking for?">
            <span class="input-group-btn">
              <button class="btn btn-info" type="button">Search</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>
