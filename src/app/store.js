import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/section/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
