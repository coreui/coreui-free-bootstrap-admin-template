import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mx-4">
              <div className="card-block p-4">
                <h1>Register</h1>
                <p className="text-muted">Create your account</p>
                <div className="input-group mb-3">
                  <span className="input-group-addon"><i className="icon-user"></i></span>
                  <input type="text" className="form-control" placeholder="Username"/>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-addon">@</span>
                  <input type="text" className="form-control" placeholder="Email"/>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-addon"><i className="icon-lock"></i></span>
                  <input type="password" className="form-control" placeholder="Password"/>
                </div>

                <div className="input-group mb-4">
                  <span className="input-group-addon"><i className="icon-lock"></i></span>
                  <input type="password" className="form-control" placeholder="Repeat password"/>
                </div>

                <button type="button" className="btn btn-block btn-success">Create Account</button>
              </div>
              <div className="card-footer p-4">
                <div className="row">
                  <div className="col-6">
                    <button className="btn btn-block btn-facebook" type="button"><span>facebook</span></button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-block btn-twitter" type="button"><span>twitter</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
