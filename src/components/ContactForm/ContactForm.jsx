import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';
const ContactForm = () => {
  const labelNameId = uuidv4();
  const labelNumberId = uuidv4();

  return (
    <form className={s.contactForm}>
      <div className={s.nameBlock}>
        <label htmlFor={labelNameId} className={s.labelName}>
          Name
        </label>
        <input
          id={labelNameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </div>
      <div className={s.numberBlock}>
        <label htmlFor={labelNumberId} className={s.labelNumber}>
          Number
        </label>

        <input
          id={labelNumberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </div>
    </form>
  );
};

export default ContactForm;
