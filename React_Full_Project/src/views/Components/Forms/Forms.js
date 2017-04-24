import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">
                <strong>Credit Card</strong> <small>Form</small>
              </div>
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="ccnumber">Credit Card Number</label>
                      <input type="text" className="form-control" id="ccnumber" placeholder="0000 0000 0000 0000"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-4">
                    <label htmlFor="ccmonth">Month</label>
                    <select className="form-control" id="ccmonth">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="ccyear">Year</label>
                    <select className="form-control" id="ccyear">
                      <option>2014</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="cvv">CVV/CVC</label>
                      <input type="text" className="form-control" id="cvv" placeholder="123"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">
                <strong>Company</strong> <small>Form</small>
              </div>
              <div className="card-block">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" className="form-control" id="company" placeholder="Enter your company name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="vat">VAT</label>
                  <input type="text" className="form-control" id="vat" placeholder="PL1234567890"/>
                </div>
                <div className="form-group">
                  <label htmlFor="street">Street</label>
                  <input type="text" className="form-control" id="street" placeholder="Enter street name"/>
                </div>
                <div className="row">
                  <div className="form-group col-sm-8">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter your city"/>
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="postal-code">Postal Code</label>
                    <input type="text" className="form-control" id="postal-code" placeholder="Postal Code"/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input type="text" className="form-control" id="country" placeholder="Country name"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <strong>Basic Form</strong> Elements
              </div>
              <div className="card-block">
                <form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Static</label>
                    <div className="col-md-9">
                      <p className="form-control-static">Username</p>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">Text Input</label>
                    <div className="col-md-9">
                      <input type="text" id="text-input" name="text-input" className="form-control" placeholder="Text"/>
                      <span className="help-block">This is a help text</span>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="email-input">Email Input</label>
                    <div className="col-md-9">
                      <input type="email" id="email-input" name="email-input" className="form-control" placeholder="Enter Email"/>
                      <span className="help-block">Please enter your email</span>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="password-input">Password</label>
                    <div className="col-md-9">
                      <input type="password" id="password-input" name="password-input" className="form-control" placeholder="Password"/>
                      <span className="help-block">Please enter a complex password</span>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="disabled-input">Disabled Input</label>
                    <div className="col-md-9">
                      <input type="text" id="disabled-input" name="disabled-input" className="form-control" placeholder="Disabled" disabled/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="textarea-input">Textarea</label>
                    <div className="col-md-9">
                      <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control" placeholder="Content.."></textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="select">Select</label>
                    <div className="col-md-9">
                      <select id="select" name="select" className="form-control">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="select">Select Large</label>
                    <div className="col-md-9">
                      <select id="select" name="select" className="form-control form-control-lg">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="select">Select Small</label>
                    <div className="col-md-9">
                      <select id="select" name="select" className="form-control form-control-sm">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="select">Disabled Select</label>
                    <div className="col-md-9">
                      <select id="disabledSelect" className="form-control" disabled>
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="multiple-select">Multiple select</label>
                    <div className="col-md-9">
                      <select id="multiple-select" name="multiple-select" className="form-control" size="5" multiple>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                        <option value="4">Option #4</option>
                        <option value="5">Option #5</option>
                        <option value="6">Option #6</option>
                        <option value="7">Option #7</option>
                        <option value="8">Option #8</option>
                        <option value="9">Option #9</option>
                        <option value="10">Option #10</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Radios</label>
                    <div className="col-md-9">
                      <div className="radio">
                        <label htmlFor="radio1">
                          <input type="radio" id="radio1" name="radios" value="option1"/> Option 1
                        </label>
                      </div>
                      <div className="radio">
                        <label htmlFor="radio2">
                          <input type="radio" id="radio2" name="radios" value="option2"/> Option 2
                        </label>
                      </div>
                      <div className="radio">
                        <label htmlFor="radio3">
                          <input type="radio" id="radio3" name="radios" value="option3"/> Option 3
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Inline Radios</label>
                    <div className="col-md-9">
                      <label className="radio-inline" htmlFor="inline-radio1">
                        <input type="radio" id="inline-radio1" name="inline-radios" value="option1"/> One
                      </label>
                      <label className="radio-inline" htmlFor="inline-radio2">
                        <input type="radio" id="inline-radio2" name="inline-radios" value="option2"/> Two
                      </label>
                      <label className="radio-inline" htmlFor="inline-radio3">
                        <input type="radio" id="inline-radio3" name="inline-radios" value="option3"/> Three
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Checkboxes</label>
                    <div className="col-md-9">
                      <div className="checkbox">
                        <label htmlFor="checkbox1">
                          <input type="checkbox" id="checkbox1" name="checkbox1" value="option1"/> Option 1
                        </label>
                      </div>
                      <div className="checkbox">
                        <label htmlFor="checkbox2">
                          <input type="checkbox" id="checkbox2" name="checkbox2" value="option2"/> Option 2
                        </label>
                      </div>
                      <div className="checkbox">
                        <label htmlFor="checkbox3">
                          <input type="checkbox" id="checkbox3" name="checkbox3" value="option3"/> Option 3
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Inline Checkboxes</label>
                    <div className="col-md-9">
                      <label className="checkbox-inline" htmlFor="inline-checkbox1">
                        <input type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/>One
                      </label>
                      <label className="checkbox-inline" htmlFor="inline-checkbox2">
                        <input type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>Two
                      </label>
                      <label className="checkbox-inline" htmlFor="inline-checkbox3">
                        <input type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>Three
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="file-input">File input</label>
                    <div className="col-md-9">
                      <input type="file" id="file-input" name="file-input"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="file-multiple-input">Multiple File input</label>
                    <div className="col-md-9">
                      <input type="file" id="file-multiple-input" name="file-multiple-input" multiple/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Inline</strong> Form
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-inline">
                  <div className="form-group">
                    <label htmlFor="exampleInputName2">Name</label>
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <strong>Horizontal</strong> Form
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-horizontal">
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="hf-email">Email</label>
                    <div className="col-md-9">
                      <input type="email" id="hf-email" name="hf-email" className="form-control" placeholder="Enter Email.."/>
                      <span className="help-block">Please enter your email</span>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="hf-password">Password</label>
                    <div className="col-md-9">
                      <input type="password" id="hf-password" name="hf-password" className="form-control" placeholder="Enter Password.."/>
                      <span className="help-block">Please enter your password</span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <strong>Normal</strong> Form
              </div>
              <div className="card-block">
                <form action="" method="post">
                  <div className="form-group">
                    <label htmlFor="nf-email">Email</label>
                    <input type="email" id="nf-email" name="nf-email" className="form-control" placeholder="Enter Email.."/>
                    <span className="help-block">Please enter your email</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="nf-password">Password</label>
                    <input type="password" id="nf-password" name="nf-password" className="form-control" placeholder="Enter Password.."/>
                    <span className="help-block">Please enter your password</span>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                Input <strong>Grid</strong>
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-horizontal">
                  <div className="form-group row">
                    <div className="col-sm-3">
                      <input type="text" className="form-control" placeholder=".col-sm-3"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-4">
                      <input type="text" className="form-control" placeholder=".col-sm-4"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-5">
                      <input type="text" className="form-control" placeholder=".col-sm-5"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <input type="text" className="form-control" placeholder=".col-sm-6"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-7">
                      <input type="text" className="form-control" placeholder=".col-sm-7"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-8">
                      <input type="text" className="form-control" placeholder=".col-sm-8"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-9">
                      <input type="text" className="form-control" placeholder=".col-sm-9"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder=".col-sm-10"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-11">
                      <input type="text" className="form-control" placeholder=".col-sm-11"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input type="text" className="form-control" placeholder=".col-sm-12"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-user"></i> Login</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                Input <strong>Sizes</strong>
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-horizontal">
                  <div className="form-group row">
                    <label className="col-sm-5 form-control-label" htmlFor="input-small">Small Input</label>
                    <div className="col-sm-6">
                      <input type="text" id="input-small" name="input-small" className="form-control input-sm" placeholder=".input-sm"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-5 form-control-label" htmlFor="input-normal">Normal Input</label>
                    <div className="col-sm-6">
                      <input type="text" id="input-normal" name="input-normal" className="form-control" placeholder="Normal"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-5 form-control-label" htmlFor="input-large">Large Input</label>
                    <div className="col-sm-6">
                      <input type="text" id="input-large" name="input-large" className="form-control input-lg" placeholder=".input-lg"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">
                <strong>Validation states</strong> Form
              </div>
              <div className="card-block">
                <div className="form-group has-success">
                  <label className="form-form-control-label" htmlFor="inputSuccess1">Input with success</label>
                  <input type="text" className="form-control" id="inputSuccess1"/>
                </div>
                <div className="form-group has-warning">
                  <label className="form-form-control-label" htmlFor="inputWarning1">Input with warning</label>
                  <input type="text" className="form-control" id="inputWarning1"/>
                </div>
                <div className="form-group has-danger">
                  <label className="form-form-control-label" htmlFor="inputError1">Input with error</label>
                  <input type="text" className="form-control" id="inputError1"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">
                <strong>Validation states</strong> with optional icons
              </div>
              <div className="card-block">
                <div className="form-group has-success">
                  <label className="form-form-control-label" htmlFor="inputSuccess2">Input with success</label>
                  <input type="text" className="form-control form-control-success" id="inputSuccess2"/>
                </div>
                <div className="form-group has-warning">
                  <label className="form-form-control-label" htmlFor="inputWarning2">Input with warning</label>
                  <input type="text" className="form-control form-control-warning" id="inputWarning2"/>
                </div>
                <div className="form-group has-danger has-feedback">
                  <label className="form-form-control-label" htmlFor="inputError2">Input with error</label>
                  <input type="text" className="form-control form-control-danger" id="inputError2"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                <strong>Icon/Text</strong> Groups
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-horizontal">
                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input type="text" id="input1-group1" name="input1-group1" className="form-control" placeholder="Username"/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <input type="email" id="input2-group1" name="input2-group1" className="form-control" placeholder="Email"/>
                        <span className="input-group-addon"><i className="fa fa-envelope-o"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-euro"></i></span>
                        <input type="text" id="input3-group1" name="input3-group1" className="form-control" placeholder=".."/>
                        <span className="input-group-addon">.00</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-success"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                <strong>Buttons</strong> Groups
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-horizontal">
                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-search"></i> Search</button>
                        </span>
                        <input type="text" id="input1-group2" name="input1-group2" className="form-control" placeholder="Username"/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <input type="email" id="input2-group2" name="input2-group2" className="form-control" placeholder="Email"/>
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary">Submit</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-facebook"></i></button>
                        </span>
                        <input type="text" id="input3-group2" name="input3-group2" className="form-control" placeholder="Search"/>
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-twitter"></i></button>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-success"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                <strong>Dropdowns</strong> Groups
              </div>
              <div className="card-block">
                <form className="form-horizontal">
                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <div className="input-group-btn">
                          <ButtonDropdown isOpen={this.state.first} toggle={() => { this.setState({ first: !this.state.first }); }}>
                            <DropdownToggle caret color="primary">
                              Button Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem>Something else here</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </div>
                        <input type="text" id="input1-group3" name="input1-group3" className="form-control" placeholder="Username"/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <input type="email" id="input2-group3" name="input2-group3" className="form-control" placeholder="Email"/>
                        <div className="input-group-btn">
                          <ButtonDropdown isOpen={this.state.second} toggle={() => { this.setState({ second: !this.state.second }); }}>
                            <DropdownToggle caret color="primary">
                              Button Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem>Something else here</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <div className="input-group-btn">
                          <ButtonDropdown isOpen={this.state.third} toggle={() => { this.setState({ third: !this.state.third }); }}>
                            <Button id="caret" color="primary">Action</Button>
                            <DropdownToggle caret color="primary" />
                            <DropdownMenu>
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem>Something else here</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </div>
                        <input type="text" id="input3-group3" name="input3-group3" className="form-control" placeholder=".."/>
                        <div className="input-group-btn">
                          <ButtonDropdown isOpen={this.state.fourth} toggle={() => { this.setState({ fourth: !this.state.fourth }); }}>
                            <DropdownToggle caret color="primary">
                              Button Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem>Something else here</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-success"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Use the grid for big devices! <small><code>.col-lg-*</code> <code>.col-md-*</code> <code>.col-sm-*</code></small>
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-horizontal">
                  <div className="form-group row">
                    <div className="col-md-8">
                      <input type="text" className="form-control" placeholder=".col-md-8"/>
                    </div>
                    <div className="col-md-4">
                      <input type="text" className="form-control" placeholder=".col-md-4"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-7">
                      <input type="text" className="form-control" placeholder=".col-md-7"/>
                    </div>
                    <div className="col-md-5">
                      <input type="text" className="form-control" placeholder=".col-md-5"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder=".col-md-6"/>
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder=".col-md-6"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5">
                      <input type="text" className="form-control" placeholder=".col-md-5"/>
                    </div>
                    <div className="col-md-7">
                      <input type="text" className="form-control" placeholder=".col-md-7"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-4">
                      <input type="text" className="form-control" placeholder=".col-md-4"/>
                    </div>
                    <div className="col-md-8">
                      <input type="text" className="form-control" placeholder=".col-md-8"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary">Action</button>
                <button type="button" className="btn btn-sm btn-danger">Action</button>
                <button type="button" className="btn btn-sm btn-warning">Action</button>
                <button type="button" className="btn btn-sm btn-info">Action</button>
                <button type="button" className="btn btn-sm btn-success">Action</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Input Grid for small devices! <small> <code>.col-*</code></small>
              </div>
              <div className="card-block">
                <form action="" method="post" className="form-horizontal">
                  <div className="form-group row">
                    <div className="col-4">
                      <input type="text" className="form-control" placeholder=".col-4"/>
                    </div>
                    <div className="col-8">
                      <input type="text" className="form-control" placeholder=".col-8"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-5">
                      <input type="text" className="form-control" placeholder=".col-5"/>
                    </div>
                    <div className="col-7">
                      <input type="text" className="form-control" placeholder=".col-7"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-6">
                      <input type="text" className="form-control" placeholder=".col-6"/>
                    </div>
                    <div className="col-6">
                      <input type="text" className="form-control" placeholder=".col-6"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-7">
                      <input type="text" className="form-control" placeholder=".col-5"/>
                    </div>
                    <div className="col-5">
                      <input type="text" className="form-control" placeholder=".col-5"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-8">
                      <input type="text" className="form-control" placeholder=".col-8"/>
                    </div>
                    <div className="col-4">
                      <input type="text" className="form-control" placeholder=".col-4"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary">Action</button>
                <button type="button" className="btn btn-sm btn-danger">Action</button>
                <button type="button" className="btn btn-sm btn-warning">Action</button>
                <button type="button" className="btn btn-sm btn-info">Action</button>
                <button type="button" className="btn btn-sm btn-success">Action</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                Example Form
              </div>
              <div className="card-block">
                <form action="" method="post">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">Username</span>
                      <input type="text" id="username3" name="username3" className="form-control"/>
                      <span className="input-group-addon"><i className="fa fa-user"></i></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">Email</span>
                      <input type="email" id="email3" name="email3" className="form-control"/>
                      <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">Password</span>
                      <input type="password" id="password3" name="password3" className="form-control"/>
                      <span className="input-group-addon"><i className="fa fa-asterisk"></i></span>
                    </div>
                  </div>
                  <div className="form-group form-actions">
                    <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                Example Form
              </div>
              <div className="card-block">
                <form action="" method="post">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" id="username2" name="username2" className="form-control" placeholder="Username"/>
                      <span className="input-group-addon"><i className="fa fa-user"></i></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="email" id="email2" name="email2" className="form-control" placeholder="Email"/>
                      <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="password" id="password2" name="password2" className="form-control" placeholder="Password"/>
                      <span className="input-group-addon"><i className="fa fa-asterisk"></i></span>
                    </div>
                  </div>
                  <div className="form-group form-actions">
                    <button type="submit" className="btn btn-sm btn-default">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                Example Form
              </div>
              <div className="card-block">
                <form action="" method="post">
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-user"></i></span>
                      <input type="text" id="username" name="username" className="form-control" placeholder="Username"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                      <input type="email" id="email" name="email" className="form-control" placeholder="Email"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-asterisk"></i></span>
                      <input type="password" id="password" name="password" className="form-control" placeholder="Password"/>
                    </div>
                  </div>
                  <div className="form-group form-actions">
                    <button type="submit" className="btn btn-sm btn-success">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-edit"></i>Form Elements
                <div className="card-actions">
                  <a href="#" className="btn-setting"><i className="icon-settings"></i></a>
                  <a href="#" className="btn-minimize"><i className="icon-arrow-up"></i></a>
                  <a href="#" className="btn-close"><i className="icon-close"></i></a>
                </div>
              </div>
              <div className="card-block">
                <form className="form-2orizontal">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="prependedInput">Prepended text</label>
                    <div className="controls">
                      <div className="input-prepend input-group">
                        <span className="input-group-addon">@</span>
                        <input id="prependedInput" className="form-control" size="16" type="text"/>
                      </div>
                      <p className="help-block">Here's some help text</p>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="appendedInput">Appended text</label>
                    <div className="controls">
                      <div className="input-group">
                        <input id="appendedInput" className="form-control" size="16" type="text"/><span className="input-group-addon">.00</span>
                      </div>
                      <span className="help-block">Here's more help text</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="appendedPrependedInput">Append and prepend</label>
                    <div className="controls">
                      <div className="input-prepend input-group">
                        <span className="input-group-addon">$</span>
                        <input id="appendedPrependedInput" className="form-control" size="16" type="text"/><span className="input-group-addon">.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="appendedInputButton">Append with button</label>
                    <div className="controls">
                      <div className="input-group">
                        <input id="appendedInputButton" className="form-control" size="16" type="text"/>
                        <span className="input-group-btn"><button className="btn btn-default" type="button">Go!</button></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="appendedInputButtons">Two-button append</label>
                    <div className="controls">
                      <div className="input-group">
                        <input id="appendedInputButtons" size="16" className="form-control" type="text"/>
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button">Search</button>
                          <button className="btn btn-default" type="button">Options</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-default">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Forms;
