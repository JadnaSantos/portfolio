import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;

  span {
    text-align: justify;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors?.black};
  }

  @media (max-width: 425px) {
    span{
      text-align: center;
    }
  }
`;
