import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .aboutDescription {
    display: flex;
    justify-content: center;
    padding: 1rem 2rem;

    span {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
