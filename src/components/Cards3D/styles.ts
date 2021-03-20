import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5%;
  flex-wrap: wrap;

  ._A9yOf {
    padding: 0 !important;
  }
  ._wcf8- {
    top: 0 !important;
    left: 0 !important;
    background-size: 120px !important;
  }
  ._jk5LF {
    transform: translateY(110%);
  }
  ._xsi02 {
    width: 150px;
    height: 210px;
    transform: rotateY('0deg') rotateX('0deg') !important;
  }
  ._wcf8- {
    transform: translateX(0px) translateY(0px) !important;
  }

  h1 {
    font-family: 'Roboto', sans-serif !important;
    -webkit-font-smooothing: antialiased;
    font-size: 20px !important;
  }

  @media screen and (max-width: 1200px) {
    justify-content: center;
    margin-left: 0;
    width: 100%;

    ._A9yOf {
      width: 50%;
    }
    ._2NQ6L {
      width: 100%;
    }
    ._wcf8- {
      background-size: 80px !important;
    }
    ._xsi02 {
      width: 100%;
      height: 170px;
      transform: rotateY('0deg') rotateX('0deg') !important;
    }
    ._wcf8- {
      transform: translateX(0px) translateY(0px) !important;
    }

    h1 {
      font-size: 15px !important;
    }
  }
`;
