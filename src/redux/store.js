import { configureStore } from '@reduxjs/toolkit';

import { contactsSlice } from './contactsSlice';
import { getVisibleContacts } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: getVisibleContacts.reducer,
  },
});
