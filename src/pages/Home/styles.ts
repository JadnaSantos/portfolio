import styled from 'styled-components';


export const Container = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  @media (min-width: 994px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
    padding-left: 2rem;
  }
`;

export const HomeText = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    @media (max-width: 350px) {
      font-size: 0.9rem;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }


  h1 {
    font-size: 2.2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    background: linear-gradient(to left, #1f1670, #9307f1, #7109e7, #00d9ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;


    @media (max-width: 350px) {
      font-size: 1.8rem;
    }
    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }

  h2 {
    @media (max-width: 350px) {
      font-size: 1.2rem;
    }
    @media (min-width: 768px) {
      font-size: 2rem;
    }
    color:  ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  .cubo-animation {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 4px solid #8543ff;

    @media (min-width: 994px) {
      width: 40px;
      height: 40px;
      border: 5px solid #8543ff;
    }

    top: 20%;


    animation: cubo 5s linear infinite;
    @keyframes cubo {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const Image = styled.img`
  width: 455px;
  height: auto;
  max-width: 100%;

  border: 3px solid rgba(255, 255, 255, 0.4);
  filter: drop-shadow(-40px 20px 75px rgba(218, 241, 222, 0.1));
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  object-fit: cover;
  animation: profileImage__animate 10s ease-in-out alternate infinite;


  @keyframes profileImage__animate {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30%;
    }

    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }
`;

