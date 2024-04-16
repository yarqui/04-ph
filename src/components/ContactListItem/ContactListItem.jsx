import PropTypes from 'prop-types';

import Button from 'common/components/Button/Button';
import { ContactListItemStyled } from './ContactListItem.styled';
import { ContactWrap } from 'components/ContactWrap/ContactWrap.styled';

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <ContactListItemStyled>
      <ContactWrap>
        <span>{name}</span>
        <span>{number}</span>
      </ContactWrap>
      <Button type="button" label="Delete" onClick={() => deleteContact(id)} />
    </ContactListItemStyled>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
