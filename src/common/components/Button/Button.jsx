import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { ButtonStyled } from './Button.styled';

class Button extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  render() {
    const { type, label, onClick } = this.props;

    return (
      <ButtonStyled type={type} onClick={onClick}>
        {label}
      </ButtonStyled>
    );
  }
}

export default Button;
