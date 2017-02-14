import React, { Component } from 'react';

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                Card title
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
              <div className="card-footer">Card footer</div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-check"></i>Card with icon
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                Card with switch
                <label className="switch switch-sm switch-text switch-info float-right mb-0">
                  <input type="checkbox" className="switch-input" />
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </label>
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                Card with label
                <span className="badge badge-success float-right">Success</span>
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                Card with label
                <span className="badge badge-pill badge-danger float-right">42</span>
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card card-outline-primary">
              <div className="card-header">
                Card outline
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-outline-secondary">
              <div className="card-header">
                Card outline
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-outline-success">
              <div className="card-header">
                Card outline
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-outline-info">
              <div className="card-header">
                Card outline
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-outline-warning">
              <div className="card-header">
                Card outline
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-outline-danger">
              <div className="card-header">
                Card outline
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card card-accent-primary">
              <div className="card-header">
                Card with accent
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-accent-secondary">
              <div className="card-header">
                Card with accent
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-accent-success">
              <div className="card-header">
                Card with accent
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-accent-info">
              <div className="card-header">
                Card with accent
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-accent-warning">
              <div className="card-header">
                Card with accent
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-accent-danger">
              <div className="card-header">
                Card with accent
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-primary text-center">
              <div className="card-block">
                <blockquote className="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-success text-center">
              <div className="card-block">
                <blockquote className="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-info text-center">
              <div className="card-block">
                <blockquote className="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-warning text-center">
              <div className="card-block">
                <blockquote className="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-danger text-center">
              <div className="card-block">
                <blockquote className="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-primary text-center">
              <div className="card-block">
                <blockquote className="card-blockquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-primary">
              <div className="card-header">
                Card title
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-success">
              <div className="card-header">
                Card title
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-info">
              <div className="card-header">
                Card title
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-warning">
              <div className="card-header">
                Card title
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card-inverse card-danger">
              <div className="card-header">
                Card title
              </div>
              <div className="card-block">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Cards;
