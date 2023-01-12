import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


export const Title = styled.div`
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


export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 5rem;

  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 994px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;


export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  align-items: center;
  transition: transform 0.3s;
  overflow: hidden;


  &:hover{
    border-color: #00d9ff;
    border-radius: 15px;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .title {
    position: absolute;
    padding: 0 1rem 2rem 1rem;

    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background: linear-gradient(rgb(0, 0, 0, 0) -20%, rgb(4, 0, 1, 10));

    opacity: 0;
    transition: 0.4s ease-in-out;

    &:hover {
      opacity: 1;
      height: 100%;
    }

    h2 {
      font-weight: 900;
      font-size: 1.8rem;
      text-align: center;
      color: ${({ theme }) => theme.colors.white}
    }
  }

  max-width: 22rem;
`;
