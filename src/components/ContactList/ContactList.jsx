import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.container}>
      {contacts.map(contact => (
        <li className={css.contact} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
          </li>
      ))
      }
    </ul>
  );
};

export default ContactList
