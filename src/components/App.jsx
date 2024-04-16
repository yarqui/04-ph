import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

const NotiflixCfg = {
  position: 'center-top',
  width: '400px',
  timeout: 200,
  messageMaxLength: '600',
};

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    try {
      const contacts = getFromLocalStorage(LS_KEYS.contacts) ?? [];

      return contacts;
    } catch (error) {
      console.error('error', error);

      return [];
    }
  });

  useEffect(() => {
    saveToLocalStorage(LS_KEYS.contacts, contacts);
  }, [contacts]);

  const contactNameExists = name => {
    return contacts?.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const filterContacts = filterQuery => {
    setFilter(filterQuery);
  };

  const showFilteredContacts = () => {
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addContact = contact => {
    const { name } = contact;

    if (contactNameExists(name)) {
      Notify.failure(`${name} already exists in the phonebook.`, NotiflixCfg);
      return;
    }

    const newContact = { ...contact, id: nanoid(6) };

    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    const updatedContacts = contacts?.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <Container>
      <Section>
        <Heading level={1} title={Titles.PHONEBOOK} />
        <ContactForm addContact={addContact} />

        <Heading level={2} title={Titles.CONTACTS} />
        <Filter filterContacts={filterContacts} />

        <ContactList
          contacts={showFilteredContacts()}
          deleteContact={deleteContact}
        />
      </Section>
    </Container>
  );
};

export default App;
