import React from 'react';

import './Button.css';

export const Button = ({ buttonText, clickFunc, className }) => {
  return <button className={className} onClick={clickFunc}>{buttonText}</button>;
};
