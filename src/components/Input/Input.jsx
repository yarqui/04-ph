import PropTypes from 'prop-types';
import { InputStyled } from './Input.styled';

const Input = ({
  id,
  type,
  name,
  value,
  onChange,
  pattern,
  title,
  required,
}) => {
  return (
    <InputStyled
      id={id}
      type={type}
      name={name}
      value={value}
      title={title}
      pattern={pattern}
      onChange={onChange}
      required={required}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
