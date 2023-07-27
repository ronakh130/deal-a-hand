import { createSlice } from '@reduxjs/toolkit';
import { generateRandomNumber } from '../util/helperFunctions';
import { deck } from '../util/deck';

const initialState = {
  deck,
  hand: [],
};

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    // removing an element from the deck/array here is O(n) due to shifting all elements after removal
    // Ideally an object would be ideal for performance with O(1) deletions
    // However, I'm leaving it as an array for the following reasons:
    /*
      - shorter code
      - small scope for this project, perfect performance is not #1 priority
      - deck size is constant at 52 which is relatively small
      - these deletions are not happening often enough to affect performance drastically
    */
    drawCards: (state, action) => {
      const deckSize = state.deck.length;
      let handSize = action.payload > deckSize ? deckSize : action.payload;
      while (handSize > 0) {
        const pos = generateRandomNumber(state.deck.length);
        const card = state.deck.splice(pos, 1);
        state.hand.push(card);
        handSize--;
      }
    },
    emptyHand: (state) => {
      state.hand = [];
      state.deck = deck;
    },
    removeCard: (state, action) => {
      const pos = action.payload;
      const [ card ] = state.hand.splice(pos, 1);
      state.deck.push(card);
    },
  },
});

export const { drawCards, emptyHand, removeCard } = deckSlice.actions;

export default deckSlice.reducer;
