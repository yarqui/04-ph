import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from 'common/components/Button/Button';
import { InputStyled } from 'components/Input/Input.styled';
import { Form } from './ContactForm.styled';
import Label from 'components/Label/Label';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends PureComponent {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = INITIAL_STATE;

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    const trimmedCredentials = { name: name.trim(), number: number.trim() };

    this.props.addContact(trimmedCredentials);
    this.resetForm();
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="name" label="Name" />
        <InputStyled
          id="name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleInputChange}
          required
        />

        <Label htmlFor="number" label="Number" />
        <InputStyled
          id="number"
          type="number"
          name="number"
          value={number}
          title="May contain only numbers"
          onChange={this.handleInputChange}
          required
        />

        <Button type="submit" label="Add contact" />
      </Form>
    );
  }
}

export default ContactForm;
