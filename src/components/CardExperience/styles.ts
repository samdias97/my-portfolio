import styled from 'styled-components';

interface IContainerProps {
  directionProps: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 135px;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: ${props =>
    props.directionProps === 'right' ? '10px 0 0 10px' : '0 10px 10px 0'};
  border-left: ${props =>
    props.directionProps === 'left' ? '4px solid #00ffcc' : ''};
  border-right: ${props =>
    props.directionProps === 'right' ? '4px solid #00ffcc' : ''};

  h1 {
    font-size: 22px;
    margin-bottom: 5px;
  }

  hr {
    border-bottom: none;
    border-right: none;
    border-left: none;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: auto;

    h4 {
      font-size: 14px;
    }

    svg {
      margin-left: auto;
      color: #aa00ff;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        color: #00ffcc;
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
