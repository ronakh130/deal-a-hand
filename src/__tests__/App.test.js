import React from 'react';
import { render } from '../util/test-utils';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

describe('App', () => {
  it('should render and contain Header and Body', () => {
    const { getByText } = render(<App />);
    const text = getByText('Deal-a-Hand!');
    const drawButton = getByText('Draw Cards');
    const emptyButton = getByText('Empty Hand');
    
    expect(text).toBeInTheDocument();
    expect(drawButton).toBeInTheDocument();
    expect(emptyButton).toBeInTheDocument();
  });
});
