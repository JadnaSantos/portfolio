/* eslint-disable indent */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe } from '@jest/globals';
import { Button } from '.';

describe('Button', () => {
  it('should render button', () => {
    render(<Button children={'Download CV'} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Download CV')).toBeInTheDocument();

  });
});

