import ListElement from './ListElement';
const ContactList = ({ contactsList }) => {
  return (
    <ul>
      {contactsList.map(({ id, name, number }) => {
        return <ListElement key={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactList;
