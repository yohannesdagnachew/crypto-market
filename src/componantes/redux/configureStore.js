import { configureStore } from '@reduxjs/toolkit';
import CountryReducer from './reducer';

const store = configureStore({
  reducer: {
    list: CountryReducer,
  },
});

export default store;
