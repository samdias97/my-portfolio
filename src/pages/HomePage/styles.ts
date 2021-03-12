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

const appearFromRightBtn = keyframes`
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
    line-height: 60px;

    p {
      margin-top: 10px;
      margin-left: 4px;
      font-size: 18px;
      letter-spacing: 7px;
      color: #8c8c8c;
      animation: ${appearFromRightSub} 1s;
    }
  }

  .center {
    width: 180px;
    height: 60px;
    position: relative;
    margin-top: 30px;
    margin-left: 3px;
    animation: ${appearFromRightBtn} 1.3s;
  }

  .btn {
    width: 180px;
    height: 60px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #91c9ff;
    outline: none;
    transition: 1s ease-in-out;
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }

  .btn:hover {
    transition: 1s ease-in-out;
    background: #4f95da;
  }

  .btn:hover svg {
    stroke-dashoffset: -480;
  }

  .btn span {
    color: white;
    font-size: 18px;
    font-weight: 100;
  }

  @media screen and (max-width: 1200px) {
    display: ${props => (props.displayMobile ? 'flex' : 'none')};
    padding: 15px;
    div {
      font-size: 18px;
      line-height: 50px;
      p {
        font-size: 12px;
      }
    }
  }
`;
