import styled, { keyframes } from 'styled-components';

interface IContainerProps {
  directionProps: string;
}

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 120px;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: ${props =>
    props.directionProps === 'right' ? '10px 0 0 10px' : '0 10px 10px 0'};
  border-left: ${props =>
    props.directionProps === 'left' ? '4px solid #00ffcc' : ''};
  border-right: ${props =>
    props.directionProps === 'right' ? '4px solid #00ffcc' : ''};
  animation: ${props =>
      props.directionProps === 'left' ? appearFromLeft : appearFromRight}
    1.2s;

  h1 {
    font-size: 20px;
    margin-bottom: 5px;
  }

  hr {
    border-bottom: none;
    border-right: none;
    border-left: none;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 14px;
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: auto;

    h4 {
      font-size: 12px;
    }

    svg {
      margin-left: auto;
      color: #aa00ff;
      cursor: pointer;

      &:hover {
        color: #00ffcc;
      }
    }
  }

  @media screen and (min-width: 1300px) {
    height: 135px;

    h1 {
      font-size: 22px;
    }

    h3 {
      font-size: 16px;
    }

    footer {
      h4 {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    max-width: 290px;
    min-height: 135px;
    border-left: 4px solid #00ffcc;
    border-right: 0;
    border-radius: 0 10px 10px 0;

    h1 {
      font-size: 19px;
    }

    h3 {
      font-size: 14px;
    }

    footer {
      h4 {
        font-size: 12px;
      }
    }
  }
`;
