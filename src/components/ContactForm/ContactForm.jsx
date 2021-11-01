import { v4 as uuidv4 } from 'uuid';
import '../../App';
import { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  labelNameId = uuidv4();
  labelNumberId = uuidv4();

  inputNameProps = {
    id: this.labelNameId,
    type: 'text',
    name: 'name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
  };

  inputNumberProps = {
    id: this.labelNumberId,
    type: 'tel',
    name: 'number',
    pattern: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
    title:
      'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +',
  };

  state = {
    name: '',
    number: '',
    a: 1,
  };

  handleNameInput = e => {
    const { value } = e.target;
    this.setState({ name: value });
  };

  handleNumberInput = e => {
    const { value } = e.target;
    this.setState({ number: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form className={s.contactForm} onSubmit={this.handleFormSubmit}>
        <div className={s.nameBlock}>
          <label htmlFor={this.labelNameId} className={s.labelName}>
            Name
          </label>
          <input
            required
            {...this.inputNameProps}
            onChange={this.handleNameInput}
          />
        </div>
        <div className={s.numberBlock}>
          <label htmlFor={this.labelNumberId} className={s.labelNumber}>
            Number
          </label>

          <input
            required
            {...this.inputNumberProps}
            onChange={this.handleNumberInput}
          />
        </div>
        <button type="submit">Add contact </button>
      </form>
    );
  }
}

export default ContactForm;
