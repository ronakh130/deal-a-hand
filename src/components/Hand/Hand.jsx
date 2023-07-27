import React from 'react';
import { Card } from '../Card/Card';
import { useSelector } from 'react-redux';

import './Hand.css';

export const Hand = () => {
  const { hand } = useSelector((state) => state.deckReducer);

  return (
    <div className='hand'>
      {hand.map((ele, ind) => (
        <Card card={ele} pos={ind} key={ele}/>
      ))}
    </div>
  );
};
