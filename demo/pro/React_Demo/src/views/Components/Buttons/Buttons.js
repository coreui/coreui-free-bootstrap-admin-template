import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Button} from "reactstrap";

class Buttons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Options</strong>
              </CardHeader>
              <CardBlock className="card-body">
                <Button color="primary">Primary</Button>{' '}
                <Button color="secondary">Secondary</Button>{' '}
                <Button color="success">Success</Button>{' '}
                <Button color="warning">Warning</Button>{' '}
                <Button color="danger">Danger</Button>{' '}
                <Button color="link">Link</Button>{' '}
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>With Icons</strong>
              </CardHeader>
              <CardBlock className="card-body">
                <Button color="primary"><i className="fa fa-star"></i>{'\u00A0'} Primary</Button>
                <Button color="secondary"><i className="fa fa-lightbulb-o"></i>{'\u00A0 Secondary'}</Button>
                <Button color="success"><i className="fa fa-magic"></i>&nbsp; Success</Button>
                <Button color="warning"><i className="fa fa-map-marker"></i>&nbsp; Warning</Button>
                <Button color="danger"><i className="fa fa-rss"></i>&nbsp; Danger</Button>
                <Button color="link"><i className="fa fa-link"></i>&nbsp; Link</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Size Large</strong>
                <small>Add this class <code>.btn-lg</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Button color="primary" size="lg">Primary</Button>
                <Button color="secondary" size="lg">Secondary</Button>
                <Button color="success" size="lg">Success</Button>
                <Button color="info" size="lg">Info</Button>
                <Button color="warning" size="lg">Warning</Button>
                <Button color="danger" size="lg">Danger</Button>
                <Button color="link" size="lg">Link</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Size Small</strong>
                <small>Add this class <code>.btn-sm</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Button color="primary" size="sm">Primary</Button>
                <Button color="secondary" size="sm">Secondary</Button>
                <Button color="success" size="sm">Success</Button>
                <Button color="info" size="sm">Info</Button>
                <Button color="warning" size="sm">Warning</Button>
                <Button color="danger" size="sm">Danger</Button>
                <Button color="link" size="sm">Link</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Disabled state</strong>
                <small>Add this <code>disabled="disabled"</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Button color="primary" disabled>Primary</Button>
                <Button color="secondary" disabled>Secondary</Button>
                <Button color="success" disabled>Success</Button>
                <Button color="info" disabled>Info</Button>
                <Button color="warning" disabled>Warning</Button>
                <Button color="danger" disabled>Danger</Button>
                <Button color="link" disabled>Link</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Active state</strong>
                <small>Add this class <code>.active</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Button color="primary" active>Primary</Button>
                <Button color="secondary" active>Secondary</Button>
                <Button color="success" active>Success</Button>
                <Button color="info" active>Info</Button>
                <Button color="warning" active>Warning</Button>
                <Button color="danger" active>Danger</Button>
                <Button color="link" active>Link</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Block Level Buttons</strong>
                <small>Add this class <code>.btn-block</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Button color="secondary" size="lg" block>Block level button</Button>
                <Button color="primary" size="lg" block>Block level button</Button>
                <Button color="success" size="lg" block>Block level button</Button>
                <Button color="info" size="lg" block>Block level button</Button>
                <Button color="warning" size="lg" block>Block level button</Button>
                <Button color="danger" size="lg" block>Block level button</Button>
                <Button color="link" size="lg" block>Block level button</Button>
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Options</strong>
              </CardHeader>
              <CardBlock className="card-body">
                <Button outline color="primary">Primary</Button>
                <Button outline color="secondary">Secondary</Button>
                <Button outline color="success">Success</Button>
                <Button outline color="warning">Warning</Button>
                <Button outline color="danger">Danger</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>With Icons</strong>
              </CardHeader>
              <CardBlock className="card-body">
                <Button outline color="primary"><i className="fa fa-star"></i>&nbsp; Primary</Button>
                <Button outline color="secondary"><i className="fa fa-lightbulb-o"></i>&nbsp; Secondary</Button>
                <Button outline color="success"><i className="fa fa-magic"></i>&nbsp; Success</Button>
                <Button outline color="warning"><i className="fa fa-map-marker"></i>&nbsp; Warning</Button>
                <Button outline color="danger"><i className="fa fa-rss"></i>&nbsp; Danger</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Size Large</strong>
                <small>Add this class <code>.btn-lg</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Button outline color="primary" size="lg">Primary</Button>
                <Button outline color="secondary" size="lg">Secondary</Button>
                <Button outline color="success" size="lg">Success</Button>
                <Button outline color="info" size="lg">Info</Button>
                <Button outline color="warning" size="lg">Warning</Button>
                <Button outline color="danger" size="lg">Danger</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Size Small</strong>
                <small>Add this class <code>.btn-sm</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Button outline color="primary" size="sm">Primary</Button>
                <Button outline color="secondary" size="sm">Secondary</Button>
                <Button outline color="success" size="sm">Success</Button>
                <Button outline color="info" size="sm">Info</Button>
                <Button outline color="warning" size="sm">Warning</Button>
                <Button outline color="danger" size="sm">Danger</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Disabled state</strong>
                <small>Add this <code>disabled="disabled"</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Button outline color="primary" disabled>Primary</Button>
                <Button outline color="secondary" disabled>Secondary</Button>
                <Button color="success" disabled>Success</Button>
                <Button outline color="info" disabled>Info</Button>
                <Button outline color="warning" disabled>Warning</Button>
                <Button outline color="danger" disabled>Danger</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Active state</strong>
                <small>Add this class <code>.active</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Button outline color="primary" active>Primary</Button>
                <Button outline color="secondary" active>Secondary</Button>
                <Button outline color="success" active>Success</Button>
                <Button outline color="info" active>Info</Button>
                <Button outline color="warning" active>Warning</Button>
                <Button outline color="danger" active>Danger</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardHeader>
                <strong>Block Level Buttons</strong>
                <small>Add this class <code>.btn-block</code></small>
              </CardHeader>
              <CardBlock className="card-body">
                <Button outline color="secondary" size="lg" block>Block level button</Button>
                <Button outline color="primary" size="lg" block>Block level button</Button>
                <Button outline color="success" size="lg" block>Block level button</Button>
                <Button outline color="info" size="lg" block>Block level button</Button>
                <Button outline color="warning" size="lg" block>Block level button</Button>
                <Button outline color="danger" size="lg" block>Block level button</Button>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Buttons;
