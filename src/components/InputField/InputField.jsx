import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { drawCards, emptyHand } from '../../redux/deckSlice';

import './InputField.css';
import { Button } from '../Button/Button';
import { EmptyDeck } from '../EmptyDeck/EmptyDeck';

export const InputField = () => {
  const dispatch = useDispatch();
  const [numOfCards, setNumOfCards] = useState(5);
  const { deck } = useSelector((state) => state.deckReducer);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleButtonClick();
    }
  };

  const handleButtonClick = () => {
    dispatch(drawCards(numOfCards));
  };

  const handleEmptyHandClick = () => {
    dispatch(emptyHand());
  };

  return (
    <div className='inputFieldContainer'>
      <div className='drawCardsContainer'>
        <input className='input' type='number' value={numOfCards} onChange={(e) => setNumOfCards(e.target.value)} onKeyDown={handleKeyPress} />
        <Button className='drawButton' buttonText='Draw Cards' clickFunc={handleButtonClick} />
      </div>
      <Button className='emptyHandButton' buttonText='Empty Hand' clickFunc={handleEmptyHandClick} />
      {!deck.length && <EmptyDeck />}
    </div>
  );
};
