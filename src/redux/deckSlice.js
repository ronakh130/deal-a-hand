import { createSlice } from '@reduxjs/toolkit';
import { generateRandomNumber } from '../util/helperFunctions';

const initialState = {
  deck: [
    '2C',
    '2D',
    '2H',
    '2S',
    '3C',
    '3D',
    '3H',
    '3S',
    '4C',
    '4D',
    '4H',
    '4S',
    '5C',
    '5D',
    '5H',
    '5S',
    '6C',
    '6D',
    '6H',
    '6S',
    '7C',
    '7D',
    '7H',
    '7S',
    '8C',
    '8D',
    '8H',
    '8S',
    '9C',
    '9D',
    '9H',
    '9S',
    '10C',
    '10D',
    '10H',
    '10S',
    'AC',
    'AD',
    'AH',
    'AS',
    'JC',
    'JD',
    'JH',
    'JS',
    'KC',
    'KD',
    'KH',
    'KS',
    'QC',
    'QD',
    'QH',
    'QS',
  ],
  hand: [],
};

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    drawCards: (state, action) => {
      // removing an element from the deck/array here is O(n) due to shifting all elements after removal
      // Ideally an object would be ideal for performance with O(1) deletions
      // However, I'm leaving it as an array for the following reasons:
      /*
        - shorter code
        - small scope for this project, perfect performance is not a priority
        - deck size is constant at 52 which is relatively small
        - these deletions are not happening often enough to affect performance drastically
      */
      const deckSize = state.deck.length;
      let handSize = action.payload > deckSize ? deckSize : action.payload;
      while (handSize > 0) {
        const pos = generateRandomNumber(state.deck.length);
        const card = state.deck.splice(pos, 1);
        state.hand.push(card);
        handSize--;
      }
    },
  },
});

export const { drawCards } = deckSlice.actions;

export default deckSlice.reducer;
