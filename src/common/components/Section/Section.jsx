import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { SectionStyled } from './Section.styled';

class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  render() {
    const { children } = this.props;

    return <SectionStyled>{children}</SectionStyled>;
  }
}

export default Section;
