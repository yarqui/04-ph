import PropTypes from 'prop-types';

const Label = ({ htmlFor, label }) => {
  return <label htmlFor={htmlFor}>{label}</label>;
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Label;
