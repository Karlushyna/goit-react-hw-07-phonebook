import { useDispatch, useSelector } from "react-redux";
import { delContact } from "redux/operations";
import { getContacts, getFilter } from "redux/selectors";

import styles from "./contact-list.module.css";

const getVisibleContacts = (contacts, filter) => {
    if (!filter) {
        return contacts;
    } else {
        return contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase());
        })
    }
}

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const visibleContacts = getVisibleContacts(contacts, filter);
    const dispatch = useDispatch();
    const handleDelete = id => dispatch(delContact(id));
    
    return (
    <div>
        <ul>
            {visibleContacts.map((contact, id) => (
                <li key={id}>
                    {contact.name}: {contact.phone}
                    <button type="button"
                        className={styles.contactListItemBtn}
                        onClick={() => handleDelete(contact.id)}
                    >
                    Delete
                </button>
            </li>
            ))}
            
        </ul>
</div>
)}

