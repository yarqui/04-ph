import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'common/components/Button/Button';
import Label from 'components/Label/Label';
import { Form } from './ContactForm.styled';
import Input from 'components/Input/Input';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const [userCredentials, setUserCredentials] = useState(INITIAL_STATE);

  const resetForm = () => {
    setUserCredentials(INITIAL_STATE);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = userCredentials;

    const trimmedCredentials = { name: name.trim(), number: number.trim() };

    addContact(trimmedCredentials);
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name" label="Name" />
      <Input
        id="name"
        type="text"
        name="name"
        value={userCredentials.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleInputChange}
        required
      />

      <Label htmlFor="number" label="Number" />
      <Input
        id="number"
        type="number"
        name="number"
        value={userCredentials.number}
        title="May contain only numbers"
        onChange={handleInputChange}
        required
      />

      <Button type="submit" label="Add contact" />
    </Form>
  );
};

ContactForm.propTypes = { addContact: PropTypes.func.isRequired };

export default ContactForm;
