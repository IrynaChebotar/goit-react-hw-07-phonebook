import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import { Section } from './Section/Section';
import { ContactsForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { ContactsFilter } from './ContactFilter/ContactFilter';
import { Loader } from './Loader';
import { fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>

      <Section>
        <ContactsFilter />
        {contacts.length > 0 ? (
          <>
            {visibleContacts.length === 0 && <p>No one found with that name</p>}
            {isLoading ? <Loader /> : null}
            {contacts.length === 0 && !isLoading && (
              <p>There are no contacts here yet</p>
            )}
            {contacts.length > 0 && <Contacts />}
          </>
        ) : (
          <p>There are no contacts here yet</p>
        )}
      </Section>

      <ToastContainer transition={Zoom} />
    </div>
  );
};
