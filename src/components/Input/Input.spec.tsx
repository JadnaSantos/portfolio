/* eslint-disable indent */
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe } from '@jest/globals';
import { Input } from '.';

describe('Input', () => {
  it('should render button', () => {
    render(<Input />);
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: #232119');
      expect(containerElement).toHaveStyle('color:  #232119');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle('color:  #232119');
      expect(containerElement).not.toHaveStyle('border-color: #232119');
    });
  });
});

