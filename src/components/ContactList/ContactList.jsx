import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ContactListItem from 'components/ContactListItem/ContactListItem';

class ContactList extends PureComponent {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul>
        {contacts?.map(({ name, number, id }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
