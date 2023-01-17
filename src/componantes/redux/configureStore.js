import { configureStore } from '@reduxjs/toolkit';
import CoinsReducer from './reducer';

const store = configureStore({
  reducer: {
    list: CoinsReducer,
  },
});

export default store;
