import css from "../SearchBox/SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ value, onChange }) => {
  const searchId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input type="text"
        id={searchId}
        value={value}
        onChange={(event) => onChange(event.target.value)} />
    </div>
  );
};

export default SearchBox
