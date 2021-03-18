import styled from 'styled-components';

interface IContentProps {
  displayMobile: boolean;
}

interface IContainerCard {
  classCard: string;
}

interface IContainerCircle {
  line: 'top' | 'bottom' | 'center';
}

interface IContainerLineVertical {
  lineCard?: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
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
    //padding-top: 0px;
  }
`;

export const Title = styled.h1`
  margin-left: 2%;
  font-size: 68px;
  color: #00ffcc;
  font-weight: bold;
`;

export const ContainerCard = styled.div<IContainerCard>`
  display: flex;
  align-items: center;
  margin-left: ${props => (props.classCard === 'right' ? '500px' : '')};
  margin-right: ${props => (props.classCard === 'left' ? '500px' : '')};

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

export const ContainerLineHorizontal = styled.div`
  width: 50px;
  height: 4px;
  background: #00ffcc;

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
