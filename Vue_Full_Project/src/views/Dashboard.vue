<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <b-card class="bg-primary" :no-block="true">
          <div class="card-body pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </div>
          <card-line1-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <b-card class="bg-info" :no-block="true">
          <div class="card-body pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </div>
          <card-line2-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <b-card class="bg-warning" :no-block="true">
          <div class="card-body pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </div>
          <card-line3-chart-example class="chart-wrapper" style="height:70px;" height="70"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <b-card class="bg-danger" :no-block="true">
          <div class="card-body pb-0">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
            <h4 class="mb-0">9.823</h4>
            <p>Members online</p>
          </div>
          <card-bar-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->

    <b-card>
      <div class="row">
        <div class="col-sm-5">
          <h4 class="card-title mb-0">Traffic</h4>
          <div class="small text-muted">November 2016</div>
        </div><!--/.col-->
        <div class="col-sm-7 hidden-sm-down">
          <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button>
          <b-button-toolbar class="float-right" aria-label="Toolbar with button groups">
            <b-button-group class="mr-3" aria-label="First group">
              <b-button variant="outline-secondary">Day</b-button>
              <b-button variant="outline-secondary" :active="true">Month</b-button>
              <b-button variant="outline-secondary">Year</b-button>
            </b-button-group>
          </b-button-toolbar>
        </div><!--/.col-->
      </div><!--/.row-->
      <main-chart-example class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></main-chart-example>
      <div slot="footer">
        <ul>
          <li>
            <div class="text-muted">Visits</div>
            <strong>29.703 Users (40%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="success" :value="40"></b-progress>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">Unique</div>
            <strong>24.093 Users (20%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="info" :value="20"></b-progress>
          </li>
          <li>
            <div class="text-muted">Pageviews</div>
            <strong>78.706 Views (60%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="warning" :value="60"></b-progress>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">New Users</div>
            <strong>22.123 Users (80%)</strong>
            <b-progress class="progress-xs mt-2" :precision="1" variant="danger" :value="80"></b-progress>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">Bounce Rate</div>
            <strong>40.15%</strong>
            <b-progress class="progress-xs mt-2" :precision="1" :value="40"></b-progress>
          </li>
        </ul>
      </div>
    </b-card>
    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <div class="social-box facebook">
          <i class="fa fa-facebook"></i>
          <div class="chart-wrapper">
            <social-box-chart-example :data="[65, 59, 84, 84, 51, 55, 40]" height="90"/>
          </div>
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
        </div><!--/.social-box-->
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <div class="social-box twitter">
          <i class="fa fa-twitter"></i>
          <div class="chart-wrapper">
            <social-box-chart-example :data="[1, 13, 9, 17, 34, 41, 38]" height="90"/>
          </div>
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
        </div><!--/.social-box-->
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <div class="social-box linkedin">
          <i class="fa fa-linkedin"></i>
          <div class="chart-wrapper">
            <social-box-chart-example :data="[78, 81, 80, 45, 34, 12, 40]" height="90"/>
          </div>
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
        </div><!--/.social-box-->
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <div class="social-box google-plus">
          <i class="fa fa-google-plus"></i>
          <div class="chart-wrapper">
            <social-box-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" height="90"/>
          </div>
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
        </div><!--/.social-box-->
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="row">
      <div class="col-md-12">
        <b-card header="Traffic &amp; Sales">
          <div class="row">
            <div class="col-sm-12 col-lg-4">
              <div class="row">
                <div class="col-sm-6">
                  <Callout variant="info">
                    <small class="text-muted">New Clients</small><br>
                    <strong class="h4">9,123</strong>
                  </Callout>
                </div><!--/.col-->
                <div class="col-sm-6">
                  <Callout variant="danger">
                    <small class="text-muted">Recuring Clients</small><br>
                    <strong class="h4">22,643</strong>
                  </Callout>
                </div><!--/.col-->
              </div><!--/.row-->
              <hr class="mt-0">
              <ul class="horizontal-bars">
                <li>
                  <div class="title">
                    Monday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="34" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="78" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Tuesday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="56" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="94" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Wednesday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="12" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="67" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Thursday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="43" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="91" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Friday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="22" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="73" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Saturday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="53" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="82" variant="danger"></b-progress>
                  </div>
                </li>
                <li>
                  <div class="title">
                    Sunday
                  </div>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="9" variant="info"></b-progress>
                    <b-progress class="progress-xs" :value="69" variant="danger"></b-progress>
                  </div>
                </li>
                <li class="legend">
                  <span class="badge badge-pill badge-info"></span> <small>New clients</small> &nbsp; <span class="badge badge-pill badge-danger"></span> <small>Recurring clients</small>
                </li>
              </ul>
            </div><!--/.col-->
            <div class="col-sm-6 col-lg-4">
              <div class="row">
                <div class="col-sm-6">
                  <Callout variant="warning">
                    <small class="text-muted">Pageviews</small><br>
                    <strong class="h4">78,623</strong>
                  </Callout>
                </div><!--/.col-->
                <div class="col-sm-6">
                  <Callout variant="success">
                    <small class="text-muted">Organic</small><br>
                    <strong class="h4">49,123</strong>
                  </Callout>
                </div><!--/.col-->
              </div><!--/.row-->
              <hr class="mt-0">
              <ul class="horizontal-bars type-2">
                <li>
                  <i class="icon-user"></i>
                  <span class="title">Male</span>
                  <span class="value">43%</span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="43" variant="warning"></b-progress>
                  </div>
                </li>
                <li>
                  <i class="icon-user-female"></i>
                  <span class="title">Female</span>
                  <span class="value">37%</span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="37" variant="warning"></b-progress>
                  </div>
                </li>
                <li class="divider"></li>
                <li>
                  <i class="icon-globe"></i>
                  <span class="title">Organic Search</span>
                  <span class="value">191,235 <span class="text-muted small">(56%)</span></span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="56" variant="success"></b-progress>
                  </div>
                </li>
                <li>
                  <i class="icon-social-facebook"></i>
                  <span class="title">Facebook</span>
                  <span class="value">51,223 <span class="text-muted small">(15%)</span></span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="15" variant="success"></b-progress>
                  </div>
                </li>
                <li>
                  <i class="icon-social-twitter"></i>
                  <span class="title">Twitter</span>
                  <span class="value">37,564 <span class="text-muted small">(11%)</span></span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="11" variant="success"></b-progress>
                  </div>
                </li>
                <li>
                  <i class="icon-social-linkedin"></i>
                  <span class="title">LinkedIn</span>
                  <span class="value">27,319 <span class="text-muted small">(8%)</span></span>
                  <div class="bars">
                    <b-progress class="progress-xs" :value="8" variant="success"></b-progress>
                  </div>
                </li>
                <li class="divider text-center">
                  <button type="button" class="btn btn-sm btn-link text-muted"><i class="icon-options"></i></button>
                </li>
              </ul>
            </div><!--/.col-->
            <div class="col-sm-6 col-lg-4">
              <div class="row">
                <div class="col-sm-6">
                  <Callout>
                    <small class="text-muted">CTR</small><br>
                    <strong class="h4">23%</strong>
                  </Callout>
                </div><!--/.col-->
                <div class="col-sm-6">
                  <Callout variant="primary">
                    <small class="text-muted">Bounce Rate</small><br>
                    <strong class="h4">5%</strong>
                  </Callout>
                </div><!--/.col-->
              </div><!--/.row-->
              <hr class="mt-0">
              <ul class="icons-list">
                <li>
                  <i class="icon-screen-desktop bg-primary"></i>
                  <div class="desc">
                    <div class="title">iMac 4k</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Sold this week</div>
                    <strong>1.924</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-screen-smartphone bg-info"></i>
                  <div class="desc">
                    <div class="title">Samsung Galaxy Edge</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Sold this week</div>
                    <strong>1.224</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-screen-smartphone bg-warning"></i>
                  <div class="desc">
                    <div class="title">iPhone 6S</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Sold this week</div>
                    <strong>1.163</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-user bg-danger"></i>
                  <div class="desc">
                    <div class="title">Premium accounts</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Sold this week</div>
                    <strong>928</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-social-spotify bg-success"></i>
                  <div class="desc">
                    <div class="title">Spotify Subscriptions</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Sold this week</div>
                    <strong>893</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-cloud-download bg-danger"></i>
                  <div class="desc">
                    <div class="title">Ebook</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Downloads</div>
                    <strong>121.924</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li>
                  <i class="icon-camera bg-warning"></i>
                  <div class="desc">
                    <div class="title">Photos</div>
                    <small>Lorem ipsum dolor sit amet</small>
                  </div>
                  <div class="value">
                    <div class="small text-muted">Uploaded</div>
                    <strong>12.125</strong>
                  </div>
                  <div class="actions">
                    <button type="button" class="btn btn-link text-muted"><i class="icon-settings"></i></button>
                  </div>
                </li>
                <li class="divider text-center">
                  <button type="button" class="btn btn-sm btn-link text-muted"><i class="icon-options"></i></button>
                </li>
              </ul>
            </div><!--/.col-->
          </div><!--/.row-->
          <br/>
          <b-table class="table-outline mb-0" hover responsive outline
            :items="tableItems"
            :fields="tableFields"
            head-variant="default"
            >
            <template slot="avatar" scope="item">
              <div class="avatar">
                <img :src="item.value.url" class="img-avatar" alt="">
                <span class="avatar-status" v-bind:class="{ 'bg-success': item.value.status == 'success',  'bg-warning': item.value.status == 'warning', 'bg-danger': item.value.status == 'danger', 'bg-secondary': item.value.status == '' }"></span>
              </div>
            </template>
            <template slot="user" scope="item">
              <div>{{item.value.name}}</div>
              <div class="small text-muted">
                <span>
                  <template v-if="item.value.new">New</template>
                  <template v-else>Recurring</template>
                </span> | Registered: {{item.value.registered}}
              </div>
            </template>
            <template slot="country" scope="item">
              <img :src="item.value.flag" :alt="item.value.name" style="height:24px;">
            </template>
            <template slot="usage" scope="item">
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{item.value.value}}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">{{item.value.period}}</small>
                </div>
              </div>
              <b-progress class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
            </template>
            <template slot="payment" scope="item">
              <i :class="item.value.icon" style="font-size:24px"></i>
            </template>
            <template slot="activity" scope="item">
              <div class="small text-muted">Last login</div>
              <strong>{{item.value}}</strong>
            </template>
          </b-table>
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
  </div>
</template>

<script>
import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import { Callout } from '../components/'

export default {
  name: 'dashboard',
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample
  },
  data: function () {
    return {
      tableItems: [
        {
          avatar: { url: 'static/img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'static/img/flags/USA.png' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'static/img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'static/img/flags/Brazil.png' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'static/img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'static/img/flags/India.png' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'static/img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'static/img/flags/France.png' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'static/img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'static/img/flags/Spain.png' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'static/img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'static/img/flags/Poland.png' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center'
        },
        user: {
          label: 'User'
        },
        country: {
          label: 'Country',
          class: 'text-center'
        },
        usage: {
          label: 'Usage'
        },
        payment: {
          label: 'Payment method',
          class: 'text-center'
        },
        activity: {
          label: 'Activity'
        }
      }
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    }
  }
}
</script>
