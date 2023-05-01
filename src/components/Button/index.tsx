import React from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <Container type="button" {...rest}>
      <a>
        {children}

      </a>
    </Container>
  );
};
