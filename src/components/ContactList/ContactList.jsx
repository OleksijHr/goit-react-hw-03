import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.container}>
      {contacts.map(contact => (
          <Contact key={contact.id} data={contact} onDelete={() => onDelete(contact.id)} />
      ))
      }
    </ul>
  );
};

export default ContactList;