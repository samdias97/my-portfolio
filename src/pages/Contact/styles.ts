import styled, { keyframes } from 'styled-components';

interface IContainerProps {
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

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(70px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const ContentAll = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Content = styled.div<IContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 2%;

  @media screen and (max-width: 1200px) {
    display: ${props => (props.displayMobile ? 'flex' : 'none')};
  }
`;

export const Title = styled.div`
  margin-bottom: 20px;
  margin-left: 4%;
  animation: ${appearFromRight} 1s;

  h1 {
    font-size: 68px;
    color: #00ffcc;
    font-weight: bold;
    margin-left: -5px;
  }
  p {
    font-size: 16px;
    margin-top: 25px;
  }

  @media screen and (max-width: 1200px) {
    padding-top: 10px;
    padding-right: 20px;
    padding-left: 15px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  form {
    ul {
      display: flex;
      list-style: none;
      animation: ${appearFromRightSub} 1s;
      li {
        width: 100%;
        margin-left: 4%;
        margin-top: 22px;
      }
    }
    .center {
      width: 180px;
      height: 60px;
      position: relative;
      margin-top: 15px;
      margin-left: auto;
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
  }

  @media screen and (max-width: 1200px) {
    padding-right: 20px;
    padding-left: 15px;
  }
`;

export const MapTemp = styled.div<IContainerProps>`
  display: flex;
  width: 100%;
  height: 100vh;

  div {
    z-index: 0;
  }

  @media screen and (max-width: 1200px) {
    display: ${props => (props.displayMobile ? 'flex' : 'none')};
    flex-direction: column;
    width: 87%;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const PanelLocation = styled.div`
  background: #000;
  position: absolute !important;
  z-index: 1 !important;
  padding: 25px;
  top: 10px;
  right: 10px;
  animation: ${appearFromBottom} 1s;
  p {
    line-height: 23px;
  }
  p:last-child {
    margin-top: 20px;
    strong {
      color: #00ffcc;
    }
  }

  @media screen and (max-width: 1200px) {
    position: relative !important;
    margin-bottom: 10px;
    top: 0;
    right: 0;
  }
`;
