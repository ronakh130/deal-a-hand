import React from 'react';

import './Card.css';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/deckSlice';

export const Card = ({ card, pos }) => {
  const dispatch = useDispatch();
  const path = `cards/${card}.svg`;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removeCard(pos))
  }

  return <img className='card' src={path} onClick={handleClick}/>;
};
