import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors/selectors';
import {
  DeleteBtn,
  ListWrapper,
  ItemStyle,
  ContactsList,
  ContactsText,
} from './Contacts.styled';
import 'react-toastify/dist/ReactToastify.css';
export const Contacts = () => {
  const visibleContacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  return (
    <ContactsList>
      <ListWrapper>
        {visibleContacts.map(({ id, name, phone }) => (
          <ItemStyle key={id}>
            <ContactsText>
              {name}: <span className="number"> {phone}</span>
            </ContactsText>

            <DeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </DeleteBtn>
          </ItemStyle>
        ))}
      </ListWrapper>
    </ContactsList>
  );
};
