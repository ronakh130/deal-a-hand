import React from 'react';
import { Card } from '../Card/Card';
import { useSelector } from 'react-redux';

import './Hand.css';

export const Hand = () => {
  const { hand } = useSelector((state) => state.deck);

  return (
    <div className='hand'>
      {hand.map((ele) => (
        <Card card={ele} />
      ))}
    </div>
  );
};
