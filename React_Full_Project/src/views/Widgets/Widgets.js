import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class Widgets extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card">
              <div className="card-block">
                <div className="h4 m-0">89.9%</div>
                <div>Lorem ipsum...</div>
                <Progress className="progress-xs my-1" color="success" value="25" />
                <small className="text-muted">Lorem ipsum dolor sit amet enim.</small>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card">
              <div className="card-block">
                <div className="h4 m-0">12.124</div>
                <div>Lorem ipsum...</div>
                <Progress className="progress-xs my-1" color="info" value="25" />
                <small className="text-muted">Lorem ipsum dolor sit amet enim.</small>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card">
              <div className="card-block">
                <div className="h4 m-0">$98.111,00</div>
                <div>Lorem ipsum...</div>
                <Progress className="progress-xs my-1" color="warning" value="25" />
                <small className="text-muted">Lorem ipsum dolor sit amet enim.</small>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card">
              <div className="card-block">
                <div className="h4 m-0">2 TB</div>
                <div>Lorem ipsum...</div>
                <Progress className="progress-xs my-1" color="danger" value="25" />
                <small className="text-muted">Lorem ipsum dolor sit amet enim.</small>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-primary">
              <div className="card-block">
                <div className="h4 m-0">89.9%</div>
                <div>Lorem ipsum...</div>
                <Progress className="progress progress-white progress-xs my-1" value="25" />
                <small className="text-muted">Lorem ipsum dolor sit amet enim.</small>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-warning">
              <div className="card-block">
                <div className="h4 m-0">12.124</div>
                <div>Lorem ipsum...</div>
                <Progress className="progress progress-white progress-xs my-1" value="25" />
                <small className="text-muted">Lorem ipsum dolor sit amet enim.</small>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block">
                <div className="h4 m-0">$98.111,00</div>
                <div>Lorem ipsum...</div>
                <Progress className="progress progress-white progress-xs my-1" value="25" />
                <small className="text-muted">Lorem ipsum dolor sit amet enim.</small>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-info">
              <div className="card-block">
                <div className="h4 m-0">2 TB</div>
                <div>Lorem ipsum...</div>
                <Progress className="progress progress-white progress-xs my-1" value="25" />
                <small className="text-muted">Lorem ipsum dolor sit amet enim.</small>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-3 clearfix">
                <i className="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
                <div className="h5 text-primary mb-0 mt-2">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-3 clearfix">
                <i className="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"></i>
                <div className="h5 text-info mb-0 mt-2">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-3 clearfix">
                <i className="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i>
                <div className="h5 text-warning mb-0 mt-2">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-3 clearfix">
                <i className="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"></i>
                <div className="h5 text-danger mb-0 mt-2">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-3 clearfix">
                <i className="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
                <div className="h5 text-primary mb-0 mt-2">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
              <div className="card-footer px-3 py-2">
                <a className="font-weight-bold font-xs btn-block text-muted" href="#">View More <i className="fa fa-angle-right float-right font-lg"></i></a>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-3 clearfix">
                <i className="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"></i>
                <div className="h5 text-info mb-0 mt-2">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
              <div className="card-footer px-3 py-2">
                <a className="font-weight-bold font-xs btn-block text-muted" href="#">View More <i className="fa fa-angle-right float-right font-lg"></i></a>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-3 clearfix">
                <i className="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i>
                <div className="h5 text-warning mb-0 mt-2">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
              <div className="card-footer px-3 py-2">
                <a className="font-weight-bold font-xs btn-block text-muted" href="#">View More <i className="fa fa-angle-right float-right font-lg"></i></a>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-3 clearfix">
                <i className="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"></i>
                <div className="h5 text-danger mb-0 mt-2">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
              <div className="card-footer px-3 py-2">
                <a className="font-weight-bold font-xs btn-block text-muted" href="#">View More <i className="fa fa-angle-right float-right font-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-0 clearfix">
                <i className="fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left"></i>
                <div className="h5 text-primary mb-0 pt-3">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-0 clearfix">
                <i className="fa fa-laptop bg-info p-4 font-2xl mr-3 float-left"></i>
                <div className="h5 text-info mb-0 pt-3">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-0 clearfix">
                <i className="fa fa-moon-o bg-warning p-4 font-2xl mr-3 float-left"></i>
                <div className="h5 text-warning mb-0 pt-3">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-0 clearfix">
                <i className="fa fa-bell bg-danger p-4 font-2xl mr-3 float-left"></i>
                <div className="h5 text-danger mb-0 pt-3">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-0 clearfix">
                <i className="fa fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left"></i>
                <div className="h5 text-primary mb-0 pt-3">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-0 clearfix">
                <i className="fa fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left"></i>
                <div className="h5 text-info mb-0 pt-3">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-0 clearfix">
                <i className="fa fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left"></i>
                <div className="h5 text-warning mb-0 pt-3">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card">
              <div className="card-block p-0 clearfix">
                <i className="fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left"></i>
                <div className="h5 text-danger mb-0 pt-3">$1.999,50</div>
                <div className="text-muted text-uppercase font-weight-bold font-xs">Income</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="social-box facebook">
              <i className="fa fa-facebook"></i>
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
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="social-box twitter">
              <i className="fa fa-twitter"></i>
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
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="social-box linkedin">
              <i className="fa fa-linkedin"></i>
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
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="social-box google-plus">
              <i className="fa fa-google-plus"></i>
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
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <div className="card-block">
              <div className="h1 text-muted text-right mb-2">
                <i className="icon-people"></i>
              </div>
              <div className="h4 mb-0">87.500</div>
              <small className="text-muted text-uppercase font-weight-bold">Visitors</small>
              <Progress className="progress progress-xs mt-3 mb-0" color="info" value="25" />
            </div>
          </div>
          <div className="card">
            <div className="card-block">
              <div className="h1 text-muted text-right mb-2">
                <i className="icon-user-follow"></i>
              </div>
              <div className="h4 mb-0">385</div>
              <small className="text-muted text-uppercase font-weight-bold">New Clients</small>
              <Progress className="progress progress-xs mt-3 mb-0" color="success" value="25" />
            </div>
          </div>
          <div className="card">
            <div className="card-block">
              <div className="h1 text-muted text-right mb-2">
                <i className="icon-basket-loaded"></i>
              </div>
              <div className="h4 mb-0">1238</div>
              <small className="text-muted text-uppercase font-weight-bold">Products sold</small>
              <Progress className="progress progress-xs mt-3 mb-0" color="warning" value="25" />
            </div>
          </div>
          <div className="card">
            <div className="card-block">
              <div className="h1 text-muted text-right mb-2">
                <i className="icon-pie-chart"></i>
              </div>
              <div className="h4 mb-0">28%</div>
              <small className="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
              <Progress className="progress progress-xs mt-3 mb-0" color="primary" value="25" />
            </div>
          </div>
          <div className="card">
            <div className="card-block">
              <div className="h1 text-muted text-right mb-2">
                <i className="icon-speedometer"></i>
              </div>
              <div className="h4 mb-0">5:34:11</div>
              <small className="text-muted text-uppercase font-weight-bold">Avg. Time</small>
              <Progress className="progress progress-xs mt-3 mb-0" color="danger" value="25" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-2">
            <div className="card">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-people"></i>
                </div>
                <div className="h4 mb-0">87.500</div>
                <small className="text-muted text-uppercase font-weight-bold">Visitors</small>
                <Progress className="progress progress-xs mt-3 mb-0" color="info" value="25" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="card">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-user-follow"></i>
                </div>
                <div className="h4 mb-0">385</div>
                <small className="text-muted text-uppercase font-weight-bold">New Clients</small>
                <Progress className="progress progress-xs mt-3 mb-0" color="success" value="25" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="card">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-basket-loaded"></i>
                </div>
                <div className="h4 mb-0">1238</div>
                <small className="text-muted text-uppercase font-weight-bold">Products sold</small>
                <Progress className="progress progress-xs mt-3 mb-0" color="warning" value="25" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="card">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-pie-chart"></i>
                </div>
                <div className="h4 mb-0">28%</div>
                <small className="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
                <Progress className="progress progress-xs mt-3 mb-0" color="primary" value="25" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="card">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-speedometer"></i>
                </div>
                <div className="h4 mb-0">5:34:11</div>
                <small className="text-muted text-uppercase font-weight-bold">Avg. Time</small>
                <Progress className="progress progress-xs mt-3 mb-0" color="danger" value="25" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="card">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-speech"></i>
                </div>
                <div className="h4 mb-0">972</div>
                <small className="text-muted text-uppercase font-weight-bold">Comments</small>
                <Progress className="progress progress-xs mt-3 mb-0" color="info" value="25" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-2">
            <div className="card card-inverse card-info">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-people"></i>
                </div>
                <div className="h4 mb-0">87.500</div>
                <small className="text-muted text-uppercase font-weight-bold">Visitors</small>
                <Progress className="progress progress-white progress-xs mt-1" value="25" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="card card-inverse card-success">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-user-follow"></i>
                </div>
                <div className="h4 mb-0">385</div>
                <small className="text-muted text-uppercase font-weight-bold">New Clients</small>
                <Progress className="progress progress-white progress-xs mt-1" value="25" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="card card-inverse card-warning">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-basket-loaded"></i>
                </div>
                <div className="h4 mb-0">1238</div>
                <small className="text-muted text-uppercase font-weight-bold">Products sold</small>
                <Progress className="progress progress-white progress-xs mt-1" value="25" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="card card-inverse card-primary">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-pie-chart"></i>
                </div>
                <div className="h4 mb-0">28%</div>
                <small className="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
                <Progress className="progress progress-white progress-xs mt-1" value="25" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="card card-inverse card-danger">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-speedometer"></i>
                </div>
                <div className="h4 mb-0">5:34:11</div>
                <small className="text-muted text-uppercase font-weight-bold">Avg. Time</small>
                <Progress className="progress progress-white progress-xs mt-1" value="25" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2">
            <div className="card card-inverse card-info">
              <div className="card-block">
                <div className="h1 text-muted text-right mb-2">
                  <i className="icon-speech"></i>
                </div>
                <div className="h4 mb-0">972</div>
                <small className="text-muted text-uppercase font-weight-bold">Comments</small>
                <Progress className="progress progress-white progress-xs mt-1" value="25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Widgets;
