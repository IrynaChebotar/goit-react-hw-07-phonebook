import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { selectContacts } from 'redux/selectors/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  StyledForm,
  Label,
  StyledField,
  StyledError,
  InputContainer,
  AddBtn,
} from './ContactForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number is required'),
});

export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        const { name, number } = values;
        if (
          contacts.find(
            contact =>
              contact.name.toLowerCase() === name.toLowerCase() ||
              contact.number === number
          )
        ) {
          return alert(`${values.name} is already in contacts`);
        }
        dispatch(addContact({ name, phone: number }));
        actions.resetForm();
        toast.success(`Contact ${values.name} added successfully!`, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }}
    >
      <StyledForm>
        <InputContainer>
          <Label htmlFor="name">
            Name:
            <StyledField type="text" name="name" placeholder=" " />
            <StyledError name="name" component="div" />
          </Label>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="number">
            Phone number:
            <StyledField type="tel" name="number" placeholder=" " />
            <StyledError name="number" component="div" />
          </Label>
        </InputContainer>

        <AddBtn type="submit">Add contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};
