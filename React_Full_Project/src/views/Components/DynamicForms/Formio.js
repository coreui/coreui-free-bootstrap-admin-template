import React from 'react';
import {Formio} from 'react-formio';

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                Form.io Example Form
              </div>
              <div className="card-block">
                <Formio src="https://examples.form.io/example" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DynamicForm;
