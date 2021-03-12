import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  max-width: 12%;
  height: 100vh;
  background: #181818;

  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Header = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26%;
  background: #000;

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
    p {
      font-size: 14px;
      color: #a6a6a6;
    }
  }

  @media screen and (max-width: 1200px) {
    header {
      img {
        max-width: 20vh;
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30% 0 30% 0;

  a {
    color: #737373;
    text-decoration: none;
    font-size: 18px;
    padding: 15px;
    text-align: center;
    border-top: 1px solid #333333;
    transition: color 0.2s;

    &:hover {
      color: #00e6b8;
    }
  }
  a:last-child {
    border-bottom: 1px solid #404040;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
    margin: 0 0 20px 0;
  }
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  a {
    color: #737373;
    transition: color 0.2s;

    &:hover {
      color: #00e6b8;
    }
    & + a {
      margin-left: 15px;
    }
  }
`;

export const ShowDrawer = styled.div`
  display: none;
  position: absolute !important;
  z-index: 2;
  top: 20px;
  right: 20px;

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
