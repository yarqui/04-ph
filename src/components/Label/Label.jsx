import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Label extends PureComponent {
  static propTypes = {
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  render() {
    const { htmlFor, label } = this.props;
    return <label htmlFor={htmlFor}>{label}</label>;
  }
}

export default Label;
