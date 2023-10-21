import {
  Wrapper,
  FilterTitile,
  ContactFilter,
  Description,
  Lable,
} from './ContactFilter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handeChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Wrapper>
      <FilterTitile>Contacts</FilterTitile>
      <ContactFilter>
        <Description
          placeholder=" "
          type="text"
          name="filter"
          onChange={handeChangeFilter}
        />
        <Lable htmlFor="filter">Find contact by name</Lable>
      </ContactFilter>
    </Wrapper>
  );
};
