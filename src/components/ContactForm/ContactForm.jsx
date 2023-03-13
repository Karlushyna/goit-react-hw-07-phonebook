import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

import styles from "./contact-form.module.css"

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const items = useSelector(getContacts);

    

    const handleChangeName = e => {
        const { value } = e.target;
        setName(value);
    };

    const handleChangeNumber = e => {
        const { value } = e.target;
        setNumber(value);
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const contactsLists = [...items];
        if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
            alert(`${name} is already in contacts`);
        } else {
            dispatch(addContact({ name: name, phone: number }));
        }
        form.reset();
    
    };

    return (
        <form className={styles.contactForm} onSubmit={handleFormSubmit}>
            <label className={styles.contactFormLabel}>Name</label>
            <input
                className={styles.contactFormName}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. 
                For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Enter name"
                value={name}
                onChange={handleChangeName}
                />

            <label className={styles.contactFormLabel}>Number </label>
                <input
                className={styles.contactFormNumber}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="Enter phone number"
                value={number}
                onChange={handleChangeNumber}
            />

                <button className={styles.contactFormButton} type="submit">
                    Add contact
                </button>

        </form>
    )


}







