import { PureComponent } from 'react';
import { nanoid } from 'nanoid';

import Section from '../common/components/Section/Section';
import Heading from 'common/components/Heading/Heading';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Container } from '../common/components/Container/Container.styled';
import Filter from './Filter/Filter';
import { Titles } from 'common/helpers/titles';
import {
  LS_KEYS,
  getFromLocalStorage,
  saveToLocalStorage,
} from 'common/helpers/localStorage';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends PureComponent {
  state = INITIAL_STATE;

  contactNameExists = name => {
    const { contacts } = this.state;

    return contacts?.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  filterContacts = filterQuery => {
    this.setState({ filter: filterQuery });
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = contact => {
    const { name } = contact;

    if (this.contactNameExists(name)) {
      alert(`${name} already exists in the phonebook.`);
      return;
    }

    const newContact = { ...contact, id: nanoid(6) };

    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, newContact],
      }),
      () => {
        saveToLocalStorage(LS_KEYS.contacts, this.state.contacts);
      }
    );
  };

  deleteContact = id => {
    this.setState(prevState => {
      const updatedContacts = prevState.contacts?.filter(
        contact => contact.id !== id
      );

      return {
        contacts: updatedContacts,
      };
    });
  };

  componentDidMount() {
    try {
      const contacts = getFromLocalStorage(LS_KEYS.contacts) ?? [];
      this.setState({ contacts });
    } catch (error) {
      console.log('error', error);
    }
  }

  componentDidUpdate(_, prevState) {
    if (
      JSON.stringify(prevState.contacts) !== JSON.stringify(this.state.contacts)
    ) {
      saveToLocalStorage(LS_KEYS.contacts, this.state.contacts);
    }
  }

  render() {
    const filteredContacts = this.showFilteredContacts();

    return (
      <Container>
        <Section>
          <Heading level={1} title={Titles.PHONEBOOK} />
          <ContactForm addContact={this.addContact} />

          <Heading level={2} title={Titles.CONTACTS} />
          <Filter filterContacts={this.filterContacts} />

          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
