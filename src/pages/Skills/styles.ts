import styled, { keyframes } from 'styled-components';

interface ICardsProps {
  displayMobile: boolean;
}

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(70px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromRightCards = keyframes`
  from {
    opacity: 0;
    transform: translateX(170px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ContainerCards = styled.div<ICardsProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1#contactTitle {
    margin-left: 2%;
    font-size: 68px;
    color: #00ffcc;
    font-weight: bold;
    animation: ${appearFromRight} 1s;
  }

  div#containerCards {
    animation: ${appearFromRightCards} 1s;
  }

  @media screen and (max-width: 1200px) {
    display: ${props => (props.displayMobile ? 'flex' : 'none')};
    h1#contactTitle {
      font-size: 50px;
    }
    padding-top: 10px;
    padding-right: 15px;
    padding-left: 15px;
  }
`;
