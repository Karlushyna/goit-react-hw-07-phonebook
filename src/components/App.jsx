import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  Section  from "./Section/Section";
import  { ContactForm }    from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { getIsLoading, getError } from "redux/selectors";
import { fetchContacts } from "redux/operations";
import { Loader } from "./Loader/Loader";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader/>}
      <ContactList />
    </Section>
  );

}

