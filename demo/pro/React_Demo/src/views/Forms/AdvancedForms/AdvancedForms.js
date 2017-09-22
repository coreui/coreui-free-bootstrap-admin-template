import React from 'react';
import { Row, Col, Card, CardHeader, CardBlock, FormGroup, Label, FormText, InputGroup, InputGroupAddon } from 'reactstrap';
import { MaskedInput } from 'react-text-mask';
import Select from 'react-select';

// React select
var options = [
  { value: 'AL', label: 'Alabama', disabled: true },
  { value: 'AK', label: 'Alaska' },
  { value: 'AS', label: 'American Samoa' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'DC', label: 'District Of Columbia' },
  { value: 'FM', label: 'Federated States Of Micronesia' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'GU', label: 'Guam' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MH', label: 'Marshall Islands' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'MP', label: 'Northern Mariana Islands' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PW', label: 'Palau' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'PR', label: 'Puerto Rico' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VI', label: 'Virgin Islands' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

class AdvancedForms extends React.Component {

  constructor(props) {
    super(props);
    this.saveChanges = this.saveChanges.bind(this);
    this.state = {
      value: 'UT'
    }
  }

  saveChanges(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="6">
            <Card>
              <CardHeader>
                <strong>Masked Input</strong> <small>React Text Mask</small>
              </CardHeader>
              <CardBlock className="card-body">
                <FormGroup>
                  <Label>Date input</Label>
                  <InputGroup>
                    <InputGroupAddon><i className="fa fa-calendar"></i></InputGroupAddon>
                    <MaskedInput
                      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. 99/99/9999
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Phone input</Label>
                  <InputGroup>
                    <InputGroupAddon><i className="fa fa-phone"></i></InputGroupAddon>
                    <MaskedInput
                      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. (999) 999-9999
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Taxpayer Identification Numbers</Label>
                  <InputGroup>
                    <InputGroupAddon><i className="fa fa-usd"></i></InputGroupAddon>
                    <MaskedInput
                      mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. 99-9999999
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Social Security Number</Label>
                  <InputGroup>
                    <InputGroupAddon><i className="fa fa-male"></i></InputGroupAddon>
                    <MaskedInput
                      mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. 999-99-9999
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Eye Script</Label>
                  <InputGroup>
                    <InputGroupAddon><i className="fa fa-asterisk"></i></InputGroupAddon>
                    <MaskedInput
                      mask={['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/]}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. ~9.99 ~9.99 999
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label>Credit Card Number</Label>
                  <InputGroup>
                    <InputGroupAddon><i className="fa fa-credit-card"></i></InputGroupAddon>
                    <MaskedInput
                      mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                      className="form-control"
                    />
                  </InputGroup>
                  <FormText color="muted">
                    ex. 9999 9999 9999 9999
                  </FormText>
                </FormGroup>
              </CardBlock>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardHeader>
                <strong>React-Select</strong>
              </CardHeader>
              <CardBlock className="card-body">
                <Select
                  name="form-field-name2"
                  value={this.state.value}
                  options={options}
                  onChange={this.saveChanges}
                  multi
                />
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AdvancedForms;
