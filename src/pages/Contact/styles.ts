import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 994px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .contact-content {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 1rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h4 {
      font-size: 1.3rem;
      margin-bottom: 8px;
    }

   span {
    color:  ${({ theme }) => theme.colors.text};
   }
  }
  margin-bottom: 3rem;
`;

export const Form = styled.div`
  margin-top: 1rem;
  width: 600px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  padding: 2rem 1.5rem;

  form {
    margin: 50px 0;
    width: 630px;

    text-align: center;

    h4 {
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors?.text};
    }
  }

  svg {
    margin-right: 16px;
  }


  @media (max-width: 638px) {
    form {
      width: 230px;
    }
  }
`;
