import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from 'components/Input/Input.styled';
import Label from 'components/Label/Label';

class Filter extends PureComponent {
  static propTypes = { filterContacts: PropTypes.func.isRequired };

  render() {
    const { filter } = this.props;

    return (
      <>
        <Label htmlFor="filter" label="Find contacts by name" />
        <InputStyled
          type="text"
          name="filter"
          value={filter}
          onChange={e => this.props.filterContacts(e.target.value)}
          required
        />
      </>
    );
  }
}

export default Filter;
