import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 468px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 994px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const SkillsContent = styled.div`
  width: 12rem;
  height: 10rem;

  border-radius: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    z-index: 1;
  }


  img {
    width: 60px;
    height: 60px;
    z-index: 1;
    color: ${({ theme }) => theme.colors.Swhite};
  }

  .border {
    &::before{
      content: '';
      position: absolute;
      width: 5rem;
      height: 17rem;
      left: 4.5rem;
      top: -40%;
      background: ${(props) => props.color};
      animation: barra 6s linear 0s infinite normal none running;
      border-radius: 10px;


    @keyframes barra {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
    }

    ::after {
      content: '';
      position: absolute;
      inset: 5px;
      background: ${({ theme }) => theme.colors.background};
      border-radius: 20px;
    }
  }

`;
