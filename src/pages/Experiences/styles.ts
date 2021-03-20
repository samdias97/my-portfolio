import styled, { keyframes } from 'styled-components';

interface IContentProps {
  displayMobile: boolean;
}

interface IContainerCard {
  classCard: string;
}

interface IContainerCircle {
  line: 'top' | 'bottom' | 'center';
}

interface IContainerLineHorizontal {
  animationDirection: 'left' | 'right';
}

interface IContainerLineVertical {
  lineCard?: boolean;
}

const appearFromRight = keyframes`
  from {
    transform: translateX(30px);
  }
  to{
    transform: translateX(0);
  }
`;

const appearFromRightTitle = keyframes`
  from {
    opacity: 0;
    transform: translateX(70px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromLeft = keyframes`
  from {
    transform: translateX(-30px);
  }
  to{
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Content = styled.div<IContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: ${props => (props.displayMobile ? 'flex' : 'none')};
    padding: 20px;
  }
`;

export const Title = styled.h1`
  position: relative;
  top: -4px;
  font-size: 68px;
  color: #00ffcc;
  font-weight: bold;
  animation: ${appearFromRightTitle} 1s;

  @media screen and (min-width: 1300px) {
    top: -16px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 50px;
    margin-bottom: 15px;
  }
`;

export const ContainerCard = styled.div<IContainerCard>`
  display: flex;
  align-items: center;
  margin-left: ${props => (props.classCard === 'right' ? '500px' : '')};
  margin-right: ${props => (props.classCard === 'left' ? '500px' : '')};

  //animation: ${appearFromRight} 1s;

  @media screen and (max-width: 1200px) {
    margin-left: 0;
    margin-right: 0;
    & + div {
      margin-top: 20px;
    }
  }
`;

export const ContainerCircle = styled.div<IContainerCircle>`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #00ffcc;
  display: flex;
  align-items: ${props =>
    props.line === 'bottom'
      ? 'flex-start'
      : props.line === 'top'
      ? 'flex-end'
      : 'center'};
  justify-content: center;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ContainerLineHorizontal = styled.div<IContainerLineHorizontal>`
  width: 50px;
  height: 4px;
  background: #00ffcc;

  animation: ${props =>
      props.animationDirection === 'left' ? appearFromLeft : appearFromRight}
    1.2s;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ContainerLineVertical = styled.div<IContainerLineVertical>`
  width: 4px;
  height: ${props => (props.lineCard ? '135px' : '')};
  background: #00ffcc;

  @media screen and (max-width: 1200px) {
    display: none;
    & + div {
      margin-top: 20px;
    }
  }
`;
