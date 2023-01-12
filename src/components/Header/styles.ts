import styled, { css } from 'styled-components';


interface Click {
  readonly click: boolean;
}


export const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  height: 4rem;
  font-weight: 600;
  font-size: 1.2rem;
  position: relative;
  z-index: 10;

  @media(min-width: 995px) {
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    align-items: center;
  }

  @media(min-width: 2000px) {
    display: flex;
    justify-content: space-evenly;
  }

`;


export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 1.6rem;

  img{
    width: 5%;
  }

  img {
    &:hover {
      cursor: pointer;
    }
  }


  @media (max-width: 998px) {
    img {
      display: none;

    }
  }
`;

export const HeaderItem = styled.div<Click>`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 30px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 994px) {
    height: 100vh;
    width: 83vw;
    background: ${({ theme }) => theme.colors.background};
    z-index: 999;
    display: ${({ click }) => (click ? 'block' : 'none')};
    opacity: 0.95;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
    gap: 13px;
  }
`;


export const MobileIcon = styled.div`
  display: none;


  @media (max-width: 994px) {
    display: block;
    position: absolute;
    top: 3.2rem;
    right: 1rem;
    cursor: pointer;
  }
`;

