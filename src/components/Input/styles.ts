import styled from 'styled-components';

interface IProps {
  focus: boolean;
  blur: boolean;
  error: boolean;
}

export const Container = styled.div<IProps>`
  position: relative;
  input {
    width: 100%;
    border: 0;
    background: #2b2b2b;
    height: 50px;
    font-size: 16px !important;
    color: #8d8d8d;
    padding: 0 18px;
    box-sizing: border-box;
    border: 2px solid #2b2b2b;
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

  input,
  label {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
  }

  /* Interation */
  input:valid,
  input:focus {
    border-bottom: ${props =>
      (props.focus || props.blur) && !props.error
        ? '2px solid #00e6b8'
        : props.error
        ? '2px solid #ff0000'
        : '2px solid #2b2b2b'};
  }

  input:valid + label,
  input:focus + label {
    color: ${props =>
      (props.focus || props.blur) && !props.error
        ? '#00e6b8'
        : props.error
        ? '#ff0000'
        : ''};
    font-size: ${props => (props.focus || props.blur ? '0.8rem' : '')};
    margin-left: ${props => (props.focus || props.blur ? 0 : '')};
    top: ${props => (props.focus || props.blur ? '-33px' : '')};
    pointer-events: ${props => (props.focus || props.blur ? 'none' : '')};
  }
`;
