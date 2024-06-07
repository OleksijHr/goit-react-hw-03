import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({data, onDelete}) => {
  return (
    <>
    <div className={css.valueContainer}>
      <p><FaPhone className={ css.iconPhone }/>{data.name}</p>
        <p><IoPerson className={ css.iconPerson } />{data.number}</p>
    </div>
    <div className={css.btnContainer}>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
    </>
  );
};

export default Contact;