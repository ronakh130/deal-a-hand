import reducer, { drawCards, emptyHand, removeCard } from '../redux/deckSlice';
import { deck } from '../util/deck';

describe('deckSlice reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      deck,
      hand: [],
    };
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({ ...initialState });
  });

  describe('drawCards', () => {
    it('should add x amount of cards to hand and remove them from deck', () => {
      const initialDeckSize = Object.values(initialState.deck).length;
      const numOfCards = 5;
      const { deck, hand } = reducer(initialState, drawCards(numOfCards));

      expect(hand.length).toEqual(numOfCards);
      expect(deck.length).toEqual(initialDeckSize - numOfCards);
    });
  });

  describe('emptyHand', () => {
    it('should empty hand and refill deck', () => {
      const { deck, hand } = reducer(initialState, emptyHand());

      expect(hand.length).toEqual(0);
      expect(deck).toEqual([...initialState.deck]);
    });
  });

  describe('removeCard', () => {
    it('should remove specified card from hand and add back to deck', () => {
      const initialDeck = initialState.deck;
      const { deck, hand } = reducer({ hand: ['QS'], deck: initialDeck.slice(0, initialDeck.length - 1) }, removeCard(0));
      
      expect(hand.length).toEqual(0);
      expect(deck).toEqual([...initialDeck]);
    });
  });
});
