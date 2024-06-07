import css from "../ContactForm/ContactForm.module.css";
import { useId } from "react"

const ContactForm = ({ onAddContact }) => {
  const contactId = useId();
  const nameId = useId(); 
  const numberId = useId(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddContact({
      id: contactId,
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    });
    event.target.reset();
  }
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input type="text" name="name"></input>
      <label htmlFor={numberId}>Number</label>
      <input type="text" name="number"></input>
      <button className={css.addBtn} type="submit">Add contact</button>
    </form>
  )
}

export default ContactForm
