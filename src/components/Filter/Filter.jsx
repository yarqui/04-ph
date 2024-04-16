import PropTypes from 'prop-types';
import { InputStyled } from 'components/Input/Input.styled';
import Label from 'components/Label/Label';

const Filter = ({ filter, filterContacts }) => {
  return (
    <>
      <Label htmlFor="filter" label="Find contacts by name" />
      <InputStyled
        type="text"
        name="filter"
        value={filter}
        onChange={e => filterContacts(e.target.value)}
        required
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterContacts: PropTypes.func.isRequired,
};

export default Filter;
