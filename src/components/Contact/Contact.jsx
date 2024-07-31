import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ data: { id, name, number } }) {
    const dispatch = useDispatch();
    
    return (
        <div className={css.container}>
            <div>
                <p className={css.text}>{ name }</p>
                <p className={css.text}>{number}</p>
            </div>
            <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
                Delete
            </button>
        </div>
    )
}