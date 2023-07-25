import React from 'react';

import './Card.css';

export const Card = ({ card }) => {
  const path = `cards/${card}.svg`;

  return <img className='card' src={path} />;
};
