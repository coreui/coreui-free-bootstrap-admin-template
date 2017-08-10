<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <b-card>
          <div class="h4 m-0">89.9%</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-xs my-3" variant="success" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <b-card>
          <div class="h4 m-0">12.124</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-xs my-3" variant="info" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <b-card>
          <div class="h4 m-0">$98.111,00</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-xs my-3" variant="warning" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <b-card>
          <div class="h4 m-0">2 TB</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-xs my-3" variant="danger" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <b-card class="text-white bg-primary">
          <div class="h4 m-0">89.9%</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <b-card class="text-white bg-warning">
          <div class="h4 m-0">12.124</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <b-card class="text-white bg-danger">
          <div class="h4 m-0">$98.111,00</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <b-card class="text-white bg-info">
          <div class="h4 m-0">2 TB</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="row">
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-3 clearfix">
            <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-3 clearfix">
            <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-info mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-3 clearfix">
            <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-warning mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-3 clearfix">
            <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-danger mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block footer-class="px-3 py-2">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
          <div slot="footer">
            <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block footer-class="px-3 py-2">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-info mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
          <div slot="footer">
            <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block footer-class="px-3 py-2">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-warning mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
          <div slot="footer">
            <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block footer-class="px-3 py-2">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-danger mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
          <div slot="footer">
            <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
          </div>
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="row">
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-0 clearfix">
            <i class="fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-0 clearfix">
            <i class="fa fa-laptop bg-info p-4 font-2xl mr-3 float-left"></i>
            <div class="h5 text-info mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-0 clearfix">
            <i class="fa fa-moon-o bg-warning p-4 font-2xl mr-3 float-left"></i>
            <div class="h5 text-warning mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-0 clearfix">
            <i class="fa fa-bell bg-danger p-4 font-2xl mr-3 float-left"></i>
            <div class="h5 text-danger mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-0 clearfix">
            <i class="fa fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-0 clearfix">
            <i class="fa fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left"></i>
            <div class="h5 text-info mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-0 clearfix">
            <i class="fa fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left"></i>
            <div class="h5 text-warning mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <b-card no-block>
          <div class="card-body p-0 clearfix">
            <i class="fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left"></i>
            <div class="h5 text-danger mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
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
      </div><!--/.col-->
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
      </div><!--/.col-->
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
      </div><!--/.col-->
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
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="card-group">
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-people"></i>
        </div>
        <div class="h4 mb-0">87.500</div>
        <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
        <b-progress class="progress-xs mt-3 mb-0" variant="info" :value="25"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-user-follow"></i>
        </div>
        <div class="h4 mb-0">385</div>
        <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
        <b-progress class="progress-xs mt-3 mb-0" variant="success" :value="25"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-basket-loaded"></i>
        </div>
        <div class="h4 mb-0">1238</div>
        <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
        <b-progress class="progress-xs mt-3 mb-0" variant="warning" :value="25"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-pie-chart"></i>
        </div>
        <div class="h4 mb-0">28%</div>
        <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
        <b-progress class="progress-xs mt-3 mb-0" :value="25"/>
      </b-card>
      <b-card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-speedometer"></i>
        </div>
        <div class="h4 mb-0">5:34:11</div>
        <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
        <b-progress class="progress-xs mt-3 mb-0" variant="danger" :value="25"/>
      </b-card>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-people"></i>
          </div>
          <div class="h4 mb-0">87.500</div>
          <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
          <b-progress class="progress-xs mt-3 mb-0" variant="info" :value="25"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow"></i>
          </div>
          <div class="h4 mb-0">385</div>
          <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
          <b-progress class="progress-xs mt-3 mb-0" variant="success" :value="25"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded"></i>
          </div>
          <div class="h4 mb-0">1238</div>
          <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
          <b-progress class="progress-xs mt-3 mb-0" variant="warning" :value="25"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart"></i>
          </div>
          <div class="h4 mb-0">28%</div>
          <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
          <b-progress class="progress-xs mt-3 mb-0" :value="25"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer"></i>
          </div>
          <div class="h4 mb-0">5:34:11</div>
          <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
          <b-progress class="progress-xs mt-3 mb-0" variant="danger" :value="25"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speech"></i>
          </div>
          <div class="h4 mb-0">972</div>
          <small class="text-muted text-uppercase font-weight-bold">Comments</small>
          <b-progress class="progress-xs mt-3 mb-0"variant="info" :value="25"/>
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="row">
      <div class="col-sm-6 col-md-2">
        <b-card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-people"></i>
          </div>
          <div class="h4 mb-0">87.500</div>
          <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <b-card class="text-white bg-success">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow"></i>
          </div>
          <div class="h4 mb-0">385</div>
          <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <b-card class="text-white bg-warning">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded"></i>
          </div>
          <div class="h4 mb-0">1238</div>
          <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <b-card class="text-white bg-primary">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart"></i>
          </div>
          <div class="h4 mb-0">28%</div>
          <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <b-card class="text-white bg-danger">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer"></i>
          </div>
          <div class="h4 mb-0">5:34:11</div>
          <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <b-card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speech"></i>
          </div>
          <div class="h4 mb-0">972</div>
          <small class="text-muted text-uppercase font-weight-bold">Comments</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'widgets',
  data () {
    return {
      msg: 'Widgets'
    }
  }
}
</script>
