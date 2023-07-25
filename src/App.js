import { useDispatch } from 'react-redux';
import { drawCards } from './redux/deckSlice';

import './styles.css';
import { Hand } from './components/Hand/Hand';
import { useState } from 'react';

// Let's build an app to deal a hand of 5 cards!
//
// There are 52 different cards in a standard deck of cards. We would like to deal multiple 5-card hands of random cards without repeating cards between hands.
//
// Suits: Clubs, Hearts, Spades, Diamonds
// Values: A,2,3,4,5,6,7,8,9,10,J,Q,K

export default function App() {
  const dispatch = useDispatch();
  const [numOfCards, setNumOfCards] = useState(5);

  return (
    <div className='App'>
      <h1>Deal-a-Hand!</h1>
      <div>
        <input type='number' value={numOfCards} onChange={(e) => setNumOfCards(e.target.value)}/>
        <button onClick={() => dispatch(drawCards(numOfCards))}>Draw Cards</button>
      </div>
      <Hand />
    </div>
  );
}
