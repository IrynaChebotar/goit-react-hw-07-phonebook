import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { DeleteBtn, ListWrapper, ItemStyle } from './Contacts.styled';
import 'react-toastify/dist/ReactToastify.css';
export const Contacts = () => {
  const visibleContacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  return (
    <ListWrapper>
      {visibleContacts.map(item => (
        <ItemStyle key={item.id}>
          <ContactItem {...item} />
        </ItemStyle>
      ))}
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact)}>
        Reset
      </DeleteBtn>
    </ListWrapper>
  );
};
