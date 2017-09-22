import React, {Component} from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules} from 'reactstrap/lib/utils';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  dataBox: PropTypes.func
};

const defaultProps = {
  dataBox: () => ({variant: "facebook", friends: "-", feeds: "-"})
};

class Widget03 extends Component {
  render() {
    const {className, cssModule, dataBox, ...attributes} = this.props;

    // demo purposes only
    const data = dataBox();
    const variant = data.variant;

    if (!variant || ['facebook', 'twitter', 'linkedin', 'google-plus'].indexOf(variant) < 0) {
      return ( null );
    }

    const icon = "fa fa-" + variant;
    const keys = Object.keys(data);
    const vals = Object.values(data);

    const classes = mapToCssModules(classNames("social-box", className, variant), cssModule);

    return (
      <div className={classes}>
        <i className={icon}></i>
        <ul>
          <li>
            <strong>{vals[1]}</strong>
            <span>{keys[1]}</span>
          </li>
          <li>
            <strong>{vals[2]}</strong>
            <span>{keys[2]}</span>
          </li>
        </ul>
      </div>
    )
  }
}

Widget03.propTypes = propTypes;
Widget03.defaultProps = defaultProps;

export default Widget03;