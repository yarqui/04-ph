import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Heading extends PureComponent {
  static propTypes = {
    level: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { level, title } = this.props;
    const HeadingLevel = `h${level}`;

    return <HeadingLevel>{title}</HeadingLevel>;
  }
}

export default Heading;
