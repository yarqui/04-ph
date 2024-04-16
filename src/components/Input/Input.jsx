import { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    pattern: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
  };

  render() {
    return <input />;
  }
}

export default Input;
