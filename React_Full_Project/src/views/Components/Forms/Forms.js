import React, {Component} from "react";
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBlock,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from "reactstrap";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Credit Card</strong>
                <small> Form</small>
              </CardHeader>
              <CardBlock className="card-body">
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Name</Label>
                      <Input type="text" id="name" placeholder="Enter your name" required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Credit Card Number</Label>
                      <Input type="text" id="ccnumber" placeholder="0000 0000 0000 0000" required/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Month</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccyear">Year</Label>
                      <Input type="select" name="ccyear" id="ccyear">
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="cvv">CVV/CVC</Label>
                      <Input type="text" id="cvv" placeholder="123" required/>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Company</strong>
                <small> Form</small>
              </CardHeader>
              <CardBlock className="card-body">
                <FormGroup>
                  <Label htmlFor="company">Company</Label>
                  <Input type="text" id="company" placeholder="Enter your company name"/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="vat">VAT</Label>
                  <Input type="text" id="vat" placeholder="DE1234567890"/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="street">Street</Label>
                  <Input type="text" id="street" placeholder="Enter street name"/>
                </FormGroup>
                <FormGroup row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="city">City</Label>
                      <Input type="text" id="city" placeholder="Enter your city"/>
                    </FormGroup>
                  </Col>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input type="text" id="postal-code" placeholder="Postal Code"/>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="country">Country</Label>
                  <Input type="text" id="country" placeholder="Country name"/>
                </FormGroup>
              </CardBlock>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Basic Form</strong> Elements
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Static</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">Username</p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Text Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Text"/>
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Email Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email-input" name="email-input" placeholder="Enter Email"/>
                      <FormText className="help-block">Please enter your email</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password-input" name="password-input" placeholder="Password"/>
                      <FormText className="help-block">Please enter a complex password</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="disabled-input">Disabled Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="disabled-input" name="disabled-input" placeholder="Disabled" disabled/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Textarea</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..."/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Select</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectLg">Select Large</Label>
                    </Col>
                    <Col xs="12" md="9" size="lg">
                      <Input type="select" name="selectLg" id="selectLg" size="lg">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="selectSm">Select Small</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="selectSm" id="SelectLm" size="sm">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                        <option value="4">Option #4</option>
                        <option value="5">Option #5</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="disabledSelect">Disabled Select</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="disabledSelect" id="disabledSelect" disabled>
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="multiple-select">Multiple select</Label>
                    </Col>
                    <Col md="9">
                      <Input type="select" name="multiple-select" id="multiple-select" multiple>
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
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Radios</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check>
                        <div className="radio">
                          <Label check htmlFor="radio1">
                            <Input type="radio" id="radio1" name="radios" value="option1"/> Option 1
                          </Label>
                        </div>
                        <div className="radio">
                          <Label check htmlFor="radio2">
                            <Input type="radio" id="radio2" name="radios" value="option2"/> Option 2
                          </Label>
                        </div>
                        <div className="radio">
                          <Label check htmlFor="radio3">
                            <Input type="radio" id="radio3" name="radios" value="option3"/> Option 3
                          </Label>
                        </div>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3"><Label>Inline Radios</Label></Col>
                    <Col md="9">
                      <FormGroup check className="form-check-inline">
                        <Label check htmlFor="inline-radio1">
                          <Input type="radio" id="inline-radio1" name="inline-radios" value="option1"/> One
                        </Label>
                        <Label check htmlFor="inline-radio2">
                          <Input type="radio" id="inline-radio2" name="inline-radios" value="option2"/> Two
                        </Label>
                        <Label check htmlFor="inline-radio3">
                          <Input type="radio" id="inline-radio3" name="inline-radios" value="option3"/> Three
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3"><Label>Checkboxes</Label></Col>
                    <Col md="9">
                      <FormGroup check>
                        <div className="checkbox">
                          <Label check htmlFor="checkbox1">
                            <Input type="checkbox" id="checkbox1" name="checkbox1" value="option1"/> Option 1
                          </Label>
                        </div>
                        <div className="checkbox">
                          <Label check htmlFor="checkbox2">
                            <Input type="checkbox" id="checkbox2" name="checkbox2" value="option2"/> Option 2
                          </Label>
                        </div>
                        <div className="checkbox">
                          <Label check htmlFor="checkbox3">
                            <Input type="checkbox" id="checkbox3" name="checkbox3" value="option3"/> Option 3
                          </Label>
                        </div>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Inline Checkboxes</Label></Col>
                    <Col md="9">
                      <FormGroup check className="form-check-inline">
                        <Label check htmlFor="inline-checkbox1">
                          <Input type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/> One
                        </Label>
                        <Label check htmlFor="inline-checkbox2">
                          <Input type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/> Two
                        </Label>
                        <Label check htmlFor="inline-checkbox3">
                          <Input type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/> Three
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">File input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-input" name="file-input"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-multiple-input">Multiple File input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple/>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <strong>Inline</strong> Form
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post" inline>
                  <FormGroup>
                    <Label htmlFor="exampleInputName2" className="pr-1">Name</Label>
                    <Input type="text" id="exampleInputName2" placeholder="Jane Doe" required/>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="exampleInputEmail2" className="px-1">Email</Label>
                    <Input type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required/>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Horizontal</strong> Form
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-email">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="hf-email" name="hf-email" placeholder="Enter Email..."/>
                      <span className="help-block">Please enter your email</span>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-password">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="hf-password" name="hf-password" placeholder="Enter Password..."/>
                      <span className="help-block">Please enter your password</span>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <strong>Normal</strong> Form
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post">
                  <FormGroup>
                    <Label htmlFor="nf-email">Email</Label>
                    <Input type="email" id="nf-email" name="nf-email" placeholder="Enter Email.."/>
                    <span className="help-block">Please enter your email</span>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="nf-password">Password</Label>
                    <Input type="password" id="nf-password" name="nf-password" placeholder="Enter Password.."/>
                    <span className="help-block">Please enter your password</span>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                Input <strong>Grid</strong>
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col sm="3">
                      <Input type="text" placeholder=".col-sm-3"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="4">
                      <Input type="text" placeholder=".col-sm-4"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="5">
                      <Input type="text" placeholder=".col-sm-5"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="6">
                      <Input type="text" placeholder=".col-sm-6"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="7">
                      <Input type="text" placeholder=".col-sm-7"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="8">
                      <Input type="text" placeholder=".col-sm-8"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="9">
                      <Input type="text" placeholder=".col-sm-9"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="10">
                      <Input type="text" placeholder=".col-sm-10"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="11">
                      <Input type="text" placeholder=".col-sm-11"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="12">
                      <Input type="text" placeholder=".col-sm-12"/>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-user"></i> Login</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                Input <strong>Sizes</strong>
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col sm="5">
                      <Label htmlFor="input-small">Small Input</Label>
                    </Col>
                    <Col sm="6">
                      <Input size="sm" type="text" id="input-small" name="input-small" className="input-sm"
                             placeholder=".form-control-sm"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="5">
                      <Label htmlFor="input-normal">Normal Input</Label>
                    </Col>
                    <Col sm="6">
                      <Input type="text" id="input-normal" name="input-normal" placeholder="Normal"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="5">
                      <Label htmlFor="input-large">Large Input</Label>
                    </Col>
                    <Col sm="6">
                      <Input size="lg" type="text" id="input-large" name="input-large" className="input-lg"
                             placeholder=".form-control-lg"/>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Validation states</strong> Form
              </CardHeader>
              <CardBlock className="card-body">
                <FormGroup color="success">
                  <Label htmlFor="inputIsValid">Input is valid</Label>
                  <Input state="success" type="text" className="is-valid" id="inputIsValid"/>
                </FormGroup>
                <FormGroup className="has-warning">
                  <Label htmlFor="inputIsInvalid">Input is invalid</Label>
                  <Input type="text" className="is-invalid" id="inputIsInvalid"/>
                </FormGroup>
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Validation states</strong> with optional icons <em>(deprecated)</em>
              </CardHeader>
              <CardBlock className="card-body">
                <FormGroup className="has-success">
                  <Label htmlFor="inputSuccess2i">Input with success</Label>
                  <Input type="text" className="form-control-success" id="inputSuccess2i"/>
                </FormGroup>
                <FormGroup className="has-warning">
                  <Label htmlFor="inputWarning2i">Input with warning</Label>
                  <Input type="text" className="form-control-warning" id="inputWarning2i"/>
                </FormGroup>
                <FormGroup className="has-danger has-feedback">
                  <Label htmlFor="inputError2i">Input with error</Label>
                  <Input type="text" className="form-control-danger" id="inputError2i"/>
                </FormGroup>
              </CardBlock>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                <strong>Icon/Text</strong> Groups
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <InputGroupAddon><i className="fa fa-user"></i></InputGroupAddon>
                        <Input type="text" id="input1-group1" name="input1-group1" placeholder="Username"/>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <Input type="email" id="input2-group1" name="input2-group1" placeholder="Email"/>
                        <InputGroupAddon><i className="fa fa-envelope-o"></i></InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <InputGroupAddon><i className="fa fa-euro"></i></InputGroupAddon>
                        <Input type="text" id="input3-group1" name="input3-group1" placeholder=".."/>
                        <InputGroupAddon>.00</InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                <strong>Buttons</strong> Groups
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <InputGroupButton>
                          <Button color="primary"><i className="fa fa-search"></i> Search</Button>
                        </InputGroupButton>
                        <Input type="text" id="input1-group2" name="input1-group2" placeholder="Username"/>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <Input type="email" id="input2-group2" name="input2-group2" placeholder="Email"/>
                        <InputGroupButton>
                          <Button color="primary">Submit</Button>
                        </InputGroupButton>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <InputGroupButton>
                          <Button color="primary"><i className="fa fa-facebook"></i></Button>
                        </InputGroupButton>
                        <Input type="text" id="input3-group2" name="input3-group2" placeholder="Search"/>
                        <InputGroupButton>
                          <Button color="primary"><i className="fa fa-twitter"></i></Button>
                        </InputGroupButton>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                <strong>Dropdowns</strong> Groups
              </CardHeader>
              <CardBlock className="card-body">
                <Form className="form-horizontal">
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <InputGroupButton>
                          <ButtonDropdown isOpen={this.state.first}
                                          toggle={() => { this.setState({ first: !this.state.first }); }}>
                            <DropdownToggle caret color="primary">
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu className={this.state.first ? "show" : ""}>
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem>Something else here</DropdownItem>
                              <DropdownItem divider/>
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </InputGroupButton>
                        <Input type="text" id="input1-group3" name="input1-group3" placeholder="Username"/>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <Input type="email" id="input2-group3" name="input2-group3" placeholder="Email"/>
                        <InputGroupButton>
                          <ButtonDropdown isOpen={this.state.second}
                                          toggle={() => { this.setState({ second: !this.state.second }); }}>
                            <DropdownToggle caret color="primary">
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu className={this.state.second ? "show" : ""}>
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem>Something else here</DropdownItem>
                              <DropdownItem divider/>
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </InputGroupButton>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="12">
                      <InputGroup>
                        <InputGroupButton>
                          <ButtonDropdown isOpen={this.state.third}
                                          toggle={() => { this.setState({ third: !this.state.third }); }}>
                            {/*<Button id="caret" color="primary">Action</Button>*/}
                            <DropdownToggle caret color="primary">Action</DropdownToggle>
                            <DropdownMenu className={this.state.third ? "show" : ""}>
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem>Something else here</DropdownItem>
                              <DropdownItem divider/>
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </InputGroupButton>
                        <Input type="text" id="input3-group3" name="input3-group3" placeholder=".."/>
                        <InputGroupButton>
                          <ButtonDropdown isOpen={this.state.fourth}
                                          toggle={() => { this.setState({ fourth: !this.state.fourth }); }}>
                            <DropdownToggle caret color="primary">
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu className={this.state.fourth ? "show" : ""}>
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem>Something else here</DropdownItem>
                              <DropdownItem divider/>
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </InputGroupButton>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Use the grid for big devices!
                <small><code>.col-lg-*</code> <code>.col-md-*</code> <code>.col-sm-*</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="8">
                      <Input type="text" placeholder=".col-md-8"/>
                    </Col>
                    <Col md="4">
                      <Input type="text" placeholder=".col-md-4"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="7">
                      <Input type="text" placeholder=".col-md-7"/>
                    </Col>
                    <Col md="5">
                      <Input type="text" placeholder=".col-md-5"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="6">
                      <Input type="text" placeholder=".col-md-6"/>
                    </Col>
                    <Col md="6">
                      <Input type="text" placeholder=".col-md-6"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="5">
                      <Input type="text" placeholder=".col-md-5"/>
                    </Col>
                    <Col md="7">
                      <Input type="text" placeholder=".col-md-7"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4">
                      <Input type="text" placeholder=".col-md-4"/>
                    </Col>
                    <Col md="8">
                      <Input type="text" placeholder=".col-md-8"/>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary">Action</Button>
                <Button size="sm" color="danger">Action</Button>
                <Button size="sm" color="warning">Action</Button>
                <Button size="sm" color="info">Action</Button>
                <Button size="sm" color="success">Action</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Input Grid for small devices!
                <small><code>.col-*</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col xs="4">
                      <Input type="text" placeholder=".col-4"/>
                    </Col>
                    <Col xs="8">
                      <Input type="text" placeholder=".col-8"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="5">
                      <Input type="text" placeholder=".col-5"/>
                    </Col>
                    <Col xs="7">
                      <Input type="text" placeholder=".col-7"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="6">
                      <Input type="text" placeholder=".col-6"/>
                    </Col>
                    <Col xs="6">
                      <Input type="text" placeholder=".col-6"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="7">
                      <Input type="text" placeholder=".col-5"/>
                    </Col>
                    <Col xs="5">
                      <Input type="text" placeholder=".col-5"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="8">
                      <Input type="text" placeholder=".col-8"/>
                    </Col>
                    <Col xs="4">
                      <Input type="text" placeholder=".col-4"/>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary">Action</Button>
                <Button size="sm" color="danger">Action</Button>
                <Button size="sm" color="warning">Action</Button>
                <Button size="sm" color="info">Action</Button>
                <Button size="sm" color="success">Action</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="4">
            <Card>
              <CardHeader>
                Example Form
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon >Username</InputGroupAddon>
                      <Input type="text" id="username3" name="username3"/>
                      <InputGroupAddon><i className="fa fa-user"></i></InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon>Email</InputGroupAddon>
                      <Input type="email" id="email3" name="email3"/>
                      <InputGroupAddon><i className="fa fa-envelope"></i></InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon>Password</InputGroupAddon>
                      <Input type="password" id="password3" name="password3"/>
                      <InputGroupAddon><i className="fa fa-asterisk"></i></InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="form-actions">
                    <Button type="submit" size="sm" color="primary">Submit</Button>
                  </FormGroup>
                </Form>
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" sm="4">
            <Card>
              <CardHeader>
                Example Form
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post">
                  <FormGroup>
                    <InputGroup>
                      <Input type="text" id="username2" name="username2" placeholder="Username"/>
                      <InputGroupAddon><i className="fa fa-user"></i></InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <Input type="email" id="email2" name="email2" placeholder="Email"/>
                      <InputGroupAddon><i className="fa fa-envelope"></i></InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <Input type="password" id="password2" name="password2" placeholder="Password"/>
                      <InputGroupAddon><i className="fa fa-asterisk"></i></InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="form-actions">
                    <Button type="submit" size="sm" color="secondary">Submit</Button>
                  </FormGroup>
                </Form>
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" sm="4">
            <Card>
              <CardHeader>
                Example Form
              </CardHeader>
              <CardBlock className="card-body">
                <Form action="" method="post">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon><i className="fa fa-user"></i></InputGroupAddon>
                      <Input type="text" id="username" name="username" placeholder="Username"/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon><i className="fa fa-envelope"></i></InputGroupAddon>
                      <Input type="email" id="email" name="email" placeholder="Email"/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon><i className="fa fa-asterisk"></i></InputGroupAddon>
                      <Input type="password" id="password" name="password" placeholder="Password"/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="form-actions">
                    <Button type="submit" size="sm" color="success">Submit</Button>
                  </FormGroup>
                </Form>
              </CardBlock>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-edit"></i>Form Elements
                <div className="card-actions">
                  <a href="#" className="btn-setting"><i className="icon-settings"></i></a>
                  <a href="#" className="btn-minimize"><i className="icon-arrow-up"></i></a>
                  <a href="#" className="btn-close"><i className="icon-close"></i></a>
                </div>
              </CardHeader>
              <CardBlock className="card-body">
                <Form className="form-horizontal">
                  <FormGroup>
                    <Label htmlFor="prependedInput">Prepended text</Label>
                    <div className="controls">
                      <InputGroup className="input-prepend">
                        <InputGroupAddon>@</InputGroupAddon>
                        <Input id="prependedInput" size="16" type="text"/>
                      </InputGroup>
                      <p className="help-block">Here's some help text</p>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="appendedInput">Appended text</Label>
                    <div className="controls">
                      <InputGroup>
                        <Input id="appendedInput" size="16" type="text"/><InputGroupAddon>.00</InputGroupAddon>
                      </InputGroup>
                      <span className="help-block">Here's more help text</span>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="appendedPrependedInput">Append and prepend</Label>
                    <div className="controls">
                      <InputGroup className="input-prepend">
                        <InputGroupAddon>$</InputGroupAddon>
                        <Input id="appendedPrependedInput" size="16" type="text"/><InputGroupAddon>.00</InputGroupAddon>
                      </InputGroup>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="appendedInputButton">Append with button</Label>
                    <div className="controls">
                      <InputGroup>
                        <Input id="appendedInputButton" size="16" type="text"/>
                        <InputGroupButton><Button color="secondary">Go!</Button></InputGroupButton>
                      </InputGroup>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="appendedInputButtons">Two-button append</Label>
                    <div className="controls">
                      <InputGroup>
                        <Input id="appendedInputButtons" size="16" type="text"/>
                        <InputGroupButton>
                          <Button color="secondary">Search</Button>
                          <Button color="secondary">Options</Button>
                        </InputGroupButton>
                      </InputGroup>
                    </div>
                  </FormGroup>
                  <div className="form-actions">
                    <Button type="submit" color="primary">Save changes</Button>
                    <Button color="secondary">Cancel</Button>
                  </div>
                </Form>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Forms;
