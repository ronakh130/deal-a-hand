import { configureStore } from '@reduxjs/toolkit';
import deckReducer from './deckSlice';

export const store = configureStore({
  reducer: {
    deckReducer,
  },
});
