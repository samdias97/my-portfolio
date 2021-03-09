import styled, { keyframes } from 'styled-components';

interface IPropsShowModal {
  showModal: boolean;
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

const appearFromLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to{
    opacity: 0;
    transform: translateX(70px);
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<IPropsShowModal>`
  position: absolute;
  z-index: 1;
  width: 17%;
  height: 12%;
  background: #fff;
  bottom: 0;
  right: 0;
  margin: 25px;
  border-radius: 10px;
  animation: ${props => (props.showModal ? appearFromRight : appearFromLeft)}
    0.8s;
`;
