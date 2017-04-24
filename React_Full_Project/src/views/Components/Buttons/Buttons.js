import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <strong>Options</strong>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-link">Link</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>With Icons</strong>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-primary"><i className="fa fa-star"></i>&nbsp; Primary</button>
                <button type="button" className="btn btn-secondary"><i className="fa fa-lightbulb-o"></i>&nbsp; Secondary</button>
                <button type="button" className="btn btn-success"><i className="fa fa-magic"></i>&nbsp; Success</button>
                <button type="button" className="btn btn-warning"><i className="fa fa-map-marker"></i>&nbsp; Warning</button>
                <button type="button" className="btn btn-danger"><i className="fa fa-rss"></i>&nbsp; Danger</button>
                <button type="button" className="btn btn-link"><i className="fa fa-link"></i>&nbsp; Link</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Size Large</strong> <small>Add this class <code>.btn-lg</code></small>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-primary btn-lg">Primary</button>
                <button type="button" className="btn btn-secondary btn-lg">Secondary</button>
                <button type="button" className="btn btn-success btn-lg">Success</button>
                <button type="button" className="btn btn-info btn-lg">Info</button>
                <button type="button" className="btn btn-warning btn-lg">Warning</button>
                <button type="button" className="btn btn-danger btn-lg">Danger</button>
                <button type="button" className="btn btn-link btn-lg">Link</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Size Small</strong> <small>Add this class <code>.btn-sm</code></small>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-primary btn-sm">Primary</button>
                <button type="button" className="btn btn-secondary btn-sm">Secondary</button>
                <button type="button" className="btn btn-success btn-sm">Success</button>
                <button type="button" className="btn btn-info btn-sm">Info</button>
                <button type="button" className="btn btn-warning btn-sm">Warning</button>
                <button type="button" className="btn btn-danger btn-sm">Danger</button>
                <button type="button" className="btn btn-link btn-sm">Link</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Disabled state</strong> <small>Add this <code>disabled="disabled"</code></small>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-primary" disabled="disabled">Primary</button>
                <button type="button" className="btn btn-secondary" disabled="disabled">Secondary</button>
                <button type="button" className="btn btn-success" disabled="disabled">Success</button>
                <button type="button" className="btn btn-info" disabled="disabled">Info</button>
                <button type="button" className="btn btn-warning" disabled="disabled">Warning</button>
                <button type="button" className="btn btn-danger" disabled="disabled">Danger</button>
                <button type="button" className="btn btn-link" disabled="disabled">Link</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Active state</strong> <small>Add this class <code>.active</code></small>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-primary active">Primary</button>
                <button type="button" className="btn btn-secondary active">Secondary</button>
                <button type="button" className="btn btn-success active">Success</button>
                <button type="button" className="btn btn-info active">Info</button>
                <button type="button" className="btn btn-warning active">Warning</button>
                <button type="button" className="btn btn-danger active">Danger</button>
                <button type="button" className="btn btn-link active">Link</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Block Level Buttons</strong> <small>Add this class <code>.btn-block</code></small>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-success btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-info btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-warning btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-danger btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-link btn-lg btn-block">Block level button</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <strong>Options</strong>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-outline-primary">Primary</button>
                <button type="button" className="btn btn-outline-secondary">Secondary</button>
                <button type="button" className="btn btn-outline-success">Success</button>
                <button type="button" className="btn btn-outline-warning">Warning</button>
                <button type="button" className="btn btn-outline-danger">Danger</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>With Icons</strong>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-outline-primary"><i className="fa fa-star"></i>&nbsp; Primary</button>
                <button type="button" className="btn btn-outline-secondary"><i className="fa fa-lightbulb-o"></i>&nbsp; Secondary</button>
                <button type="button" className="btn btn-outline-success"><i className="fa fa-magic"></i>&nbsp; Success</button>
                <button type="button" className="btn btn-outline-warning"><i className="fa fa-map-marker"></i>&nbsp; Warning</button>
                <button type="button" className="btn btn-outline-danger"><i className="fa fa-rss"></i>&nbsp; Danger</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Size Large</strong> <small>Add this class <code>.btn-lg</code></small>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-outline-primary btn-lg">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg">Secondary</button>
                <button type="button" className="btn btn-outline-success btn-lg">Success</button>
                <button type="button" className="btn btn-outline-info btn-lg">Info</button>
                <button type="button" className="btn btn-outline-warning btn-lg">Warning</button>
                <button type="button" className="btn btn-outline-danger btn-lg">Danger</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Size Small</strong> <small>Add this class <code>.btn-sm</code></small>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-outline-primary btn-sm">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-sm">Secondary</button>
                <button type="button" className="btn btn-outline-success btn-sm">Success</button>
                <button type="button" className="btn btn-outline-info btn-sm">Info</button>
                <button type="button" className="btn btn-outline-warning btn-sm">Warning</button>
                <button type="button" className="btn btn-outline-danger btn-sm">Danger</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Disabled state</strong> <small>Add this <code>disabled="disabled"</code></small>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-outline-primary" disabled="disabled">Primary</button>
                <button type="button" className="btn btn-outline-secondary" disabled="disabled">Secondary</button>
                <button type="button" className="btn btn-success" disabled="disabled">Success</button>
                <button type="button" className="btn btn-outline-info" disabled="disabled">Info</button>
                <button type="button" className="btn btn-outline-warning" disabled="disabled">Warning</button>
                <button type="button" className="btn btn-outline-danger" disabled="disabled">Danger</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Active state</strong> <small>Add this class <code>.active</code></small>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-outline-primary active">Primary</button>
                <button type="button" className="btn btn-outline-secondary active">Secondary</button>
                <button type="button" className="btn btn-outline-success active">Success</button>
                <button type="button" className="btn btn-outline-info active">Info</button>
                <button type="button" className="btn btn-outline-warning active">Warning</button>
                <button type="button" className="btn btn-outline-danger active">Danger</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Block Level Buttons</strong> <small>Add this class <code>.btn-block</code></small>
              </div>
              <div className="card-block">
                <button type="button" className="btn btn-outline-secondary btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-outline-primary btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-outline-success btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-outline-info btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-outline-warning btn-lg btn-block">Block level button</button>
                <button type="button" className="btn btn-outline-danger btn-lg btn-block">Block level button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Buttons;
