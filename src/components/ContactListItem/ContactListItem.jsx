import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'common/components/Button/Button';
import { ContactListItemStyled } from './ContactListItem.styled';
import { ContactWrap } from 'components/ContactWrap/ContactWrap.styled';

class ContactListItem extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { id, name, number, deleteContact } = this.props;
    return (
      <ContactListItemStyled>
        <ContactWrap>
          <span>{name}</span>
          <span>{number}</span>
        </ContactWrap>
        <Button
          type="button"
          label="Delete"
          onClick={() => deleteContact(id)}
        />
      </ContactListItemStyled>
    );
  }
}

export default ContactListItem;
