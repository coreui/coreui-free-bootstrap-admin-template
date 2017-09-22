import React, {Component} from 'react';
import { Card, CardHeader, CardBlock, Row, Col, Table } from 'reactstrap';


class Invoice extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            Invoice <strong>#90-98792</strong>
            <a href="#" className="btn btn-sm btn-info float-right"><i className="fa fa-print"></i> Print</a>
            <a href="#" className="btn btn-sm btn-info float-right"><i className="fa fa-save"></i> Save</a>
          </CardHeader>
          <CardBlock>
            <Row className="mb-4">
              <Col sm="4">
                <h6 className="mb-3">From:</h6>
                <div><strong>BootstrapMaster.com</strong></div>
                <div>Konopnickiej 42</div>
                <div>43-190 Mikolow, Poland</div>
                <div>Email: lukasz@bootstrapmaster.com</div>
                <div>Phone: +48 123 456 789</div>
              </Col>
              <Col sm="4">
                <h6 className="mb-3">To:</h6>
                <div><strong>BootstrapMaster.com</strong></div>
                <div>Konopnickiej 42</div>
                <div>43-190 Mikolow, Poland</div>
                <div>Email: lukasz@bootstrapmaster.com</div>
                <div>Phone: +48 123 456 789</div>
              </Col>
              <Col sm="4">
                <h6 className="mb-3">Details:</h6>
                <div>Invoice <strong>#90-98792</strong></div>
                <div>March 30, 2013</div>
                <div>VAT: PL9877281777</div>
                <div>Account Name: BootstrapMaster.com</div>
                <div><strong>SWIFT code: 99 8888 7777 6666 5555</strong></div>
              </Col>
            </Row>
            <Table striped responsive>
              <thead>
                <tr>
                  <th className="center">#</th>
                  <th>Item</th>
                  <th>Description</th>
                  <th className="center">Quantity</th>
                  <th className="right">Unit Cost</th>
                  <th className="right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="center">1</td>
                  <td className="left">Origin License</td>
                  <td className="left">Extended License</td>
                  <td className="center">1</td>
                  <td className="right">$999,00</td>
                  <td className="right">$999,00</td>
                </tr>
                <tr>
                  <td className="center">2</td>
                  <td className="left">Custom Services</td>
                  <td className="left">Instalation and Customization (cost per hour)</td>
                  <td className="center">20</td>
                  <td className="right">$150,00</td>
                  <td className="right">$3.000,00</td>
                </tr>
                <tr>
                  <td className="center">3</td>
                  <td className="left">Hosting</td>
                  <td className="left">1 year subcription</td>
                  <td className="center">1</td>
                  <td className="right">$499,00</td>
                  <td className="right">$499,00</td>
                </tr>
                <tr>
                  <td className="center">4</td>
                  <td className="left">Platinum Support</td>
                  <td className="left">1 year subcription 24/7</td>
                  <td className="center">1</td>
                  <td className="right">$3.999,00</td>
                  <td className="right">$3.999,00</td>
                </tr>
              </tbody>
            </Table>
            <Row>
              <Col lg="4" sm="5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Col>
              <Col lg="4" sm="5" className="ml-auto">
                <Table className="table-clear">
                  <tbody>
                    <tr>
                      <td className="left"><strong>Subtotal</strong></td>
                      <td className="right">$8.497,00</td>
                    </tr>
                    <tr>
                      <td className="left"><strong>Discount (20%)</strong></td>
                      <td className="right">$1,699,40</td>
                    </tr>
                    <tr>
                      <td className="left"><strong>VAT (10%)</strong></td>
                      <td className="right">$679,76</td>
                    </tr>
                    <tr>
                      <td className="left"><strong>Total</strong></td>
                      <td className="right"><strong>$7.477,36</strong></td>
                    </tr>
                  </tbody>
                </Table>
                <a href="#" className="btn btn-success"><i className="fa fa-usd"></i> Proceed to Payment</a>
              </Col>
            </Row>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

export default Invoice;
