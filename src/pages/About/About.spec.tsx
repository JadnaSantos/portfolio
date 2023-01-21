import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from '.';


describe('About', () => {
  it('should render About', () => {
    render(<About />);
  });
});
