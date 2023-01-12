import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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

export const Title = styled.h2`
  position: relative;
  font-size: 2.2rem;
  font-weight: 800;
  margin: 2rem 0;
  padding-top: 2.1rem;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 1;
  opacity: 1;

  @media (min-width: 994px) {
    font-size: 3.5rem;
  }

  span {
    z-index: -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3px;
    left: 50%;
    right: 50%;
    color: var(--second-color);
    opacity: 0.2;
    font-weight: 800;
    font-size: 2.6rem;

    @media (min-width: 370px) {
      top: -0.8rem;
      font-size: 3rem;
    }

    @media (min-width: 994px) {
      top: -0.8rem;
      font-size: 4.5rem;
    }
  }
`;

export const TimelineContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 44px;
  color: white;
`;

export const ExpContainer = styled.div`
  max-width: 554px;
  margin: 20px;


  p {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 2.25rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
`;
