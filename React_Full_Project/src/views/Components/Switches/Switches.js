import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Label, Input, Table} from "reactstrap";

class Switches extends Component {
  render() {
    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                3d Switch
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-3d switch-primary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-3d switch-secondary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-3d switch-success">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-3d switch-warning">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-3d switch-info">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-3d switch-danger">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch default
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-default switch-primary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-secondary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-success">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-warning">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-info">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-danger">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch default - pills
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-default switch-pill switch-primary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-secondary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-success">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-warning">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-info">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-danger">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch outline
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-default switch-primary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-secondary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-success-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-warning-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-info-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-danger-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch outline - pills
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-default switch-pill switch-primary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-secondary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-success-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-warning-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-info-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-danger-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch outline alternative
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-default switch-primary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-secondary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-success-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-warning-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-info-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-danger-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch outline alternative - pills
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-default switch-pill switch-primary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-secondary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-success-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-warning-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-info-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-default switch-pill switch-danger-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-text switch-primary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-secondary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-success">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-warning">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-info">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-danger">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text - pills
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-text switch-pill switch-primary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-secondary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-success">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-warning">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-info">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-danger">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline
              </CardHeader>
              <CardBlock className="card-body">

                <Label className="switch switch-text switch-primary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-secondary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-success-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-warning-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-info-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-danger-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline - pills
              </CardHeader>
              <CardBlock className="card-body">

                <Label className="switch switch-text switch-pill switch-primary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-secondary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-success-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-warning-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-info-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-danger-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline alternative
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-text switch-primary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-secondary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-success-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-warning-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-info-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-danger-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline alternative - pills
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-text switch-pill switch-primary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-secondary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-success-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-warning-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-info-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-text switch-pill switch-danger-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with icon
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-icon switch-primary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf164'} data-off={'\uf165'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-secondary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf087'} data-off={'\uf088'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-success">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf028'} data-off={'\uf026'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-warning">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-info">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-danger">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with icon - pills
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-icon switch-pill switch-primary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-secondary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-success">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-warning">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-info">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-danger">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with icon outline
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-icon switch-primary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-secondary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-success-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-warning-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-info-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-danger-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with icon outline - pills
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-icon switch-pill switch-primary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-secondary-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-success-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-warning-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-info-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-danger-outline">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with icon outline alternative
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-icon switch-primary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-secondary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-success-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-warning-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-info-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-danger-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with icon outline alternative - pills
              </CardHeader>
              <CardBlock className="card-body">
                <Label className="switch switch-icon switch-pill switch-primary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-secondary-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-success-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-warning-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-info-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <Label className="switch switch-icon switch-pill switch-danger-outline-alt">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on={'\uf00c'} data-off={'\uf00d'}></span>
                  <span className="switch-handle"></span>
                </Label>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12">
            <Card>
              <CardHeader>
                Sizes
              </CardHeader>
              <CardBlock className="card-body p-0">
                <Table hover striped className="table-align-middle mb-0">
                  <thead>
                  <tr>
                    <th>Size</th>
                    <th>Example</th>
                    <th>CSS Class</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      Large
                    </td>
                    <td>
                      <Label className="switch switch-lg switch-3d switch-primary">
                        <Input type="checkbox" className="switch-input" defaultChecked/>
                        <span className="switch-label"></span>
                        <span className="switch-handle"></span>
                      </Label>
                    </td>
                    <td>
                      Add following class <code>.switch-lg</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Normal
                    </td>
                    <td>
                      <Label className="switch switch-3d switch-primary">
                        <Input type="checkbox" className="switch-input" defaultChecked/>
                        <span className="switch-label"></span>
                        <span className="switch-handle"></span>
                      </Label>
                    </td>
                    <td>
                      -
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Small
                    </td>
                    <td>
                      <Label className="switch switch-sm switch-3d switch-primary">
                        <Input type="checkbox" className="switch-input" defaultChecked/>
                        <span className="switch-label"></span>
                        <span className="switch-handle"></span>
                      </Label>
                    </td>
                    <td>
                      Add following class <code>.switch-sm</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Extra small
                    </td>
                    <td>
                      <Label className="switch switch-xs switch-3d switch-primary">
                        <Input type="checkbox" className="switch-input" defaultChecked/>
                        <span className="switch-label"></span>
                        <span className="switch-handle"></span>
                      </Label>
                    </td>
                    <td>
                      Add following class <code>.switch-xs</code>
                    </td>
                  </tr>
                  </tbody>
                </Table>
              </CardBlock>
            </Card>
          </Col>

        </Row>
      </div>


    )
  }
}

export default Switches;
