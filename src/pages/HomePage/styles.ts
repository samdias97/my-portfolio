import styled, { keyframes } from 'styled-components';

interface ITitleProps {
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

const appearFromRightSub = keyframes`
  from {
    opacity: 0;
    transform: translateX(120px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Title = styled.div<ITitleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 60px;
  height: 100vh;
  animation: ${appearFromRight} 1s;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 32px;
    line-height: 61px;

    p {
      margin-top: 10px;
      margin-left: 4px;
      font-size: 18px;
      letter-spacing: 7px;
      color: #8c8c8c;
      animation: ${appearFromRightSub} 1s;
    }
  }

  @media screen and (max-width: 1200px) {
    display: ${props => (props.displayMobile ? 'flex' : 'none')};
    padding: 15px;
    div {
      font-size: 18px;
      p {
        font-size: 12px;
      }
    }
  }
`;
