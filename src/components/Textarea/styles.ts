import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  textarea {
    width: 100%;
    border: 0;
    background: #2b2b2b;
    height: 50px;
    font-size: 16px;
    color: #8d8d8d;
    padding: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-height: 150px;
    border: 2px solid #2b2b2b;
    resize: vertical;
    transition: 0.2s;
  }

  label {
    top: 0;
    left: 0;
    right: 0;
    color: #616161;
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 1rem;
    cursor: text;
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
    margin-left: 18px;
  }

  textarea,
  label {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
  }

  /* Interation */
  textarea:valid,
  textarea:focus {
    border-bottom: 2px solid #00e6b8;
  }

  textarea:valid + label,
  textarea:focus + label {
    color: #00e6b8;
    font-size: 0.8rem;
    margin-left: 0;
    top: -33px;
    pointer-events: none;
  }
`;
