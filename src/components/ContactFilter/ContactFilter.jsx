import { useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/filterSlice';
import { Description, Wrapper } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const handeChangeFilter = e => {
    dispatch(getVisibleContacts(e.currentTarget.value));
  };

  return (
    <Wrapper>
      Find contact by name
      <Description type="text" name="text" onChange={handeChangeFilter} />
    </Wrapper>
  );
};
