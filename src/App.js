import { Hand } from './components/Hand/Hand';
import { InputField } from './components/InputField/InputField';

import './styles.css';
// Let's build an app to deal a hand of 5 cards!
//
// There are 52 different cards in a standard deck of cards. We would like to deal multiple 5-card hands of random cards without repeating cards between hands.
//
// Suits: Clubs, Hearts, Spades, Diamonds
// Values: A,2,3,4,5,6,7,8,9,10,J,Q,K

export default function App() {
  return (
    <div className='App'>
      <div className='header'>
        <h1>Deal-a-Hand!</h1>
        <h4>For when you just NEED to draw cards!</h4>
        <h4>(Click cards to remove them from your hand)</h4>
      </div>
      <InputField />
      <Hand />
    </div>
  );
}
