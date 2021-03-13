import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 2;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4));

  @media screen and (max-width: 1200px) {
    position: fixed;
  }
`;
