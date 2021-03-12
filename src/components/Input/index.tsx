import React, {
  useCallback,
  useEffect,
  useRef,
  InputHTMLAttributes,
  useState,
} from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  typeProps: string;
  placeholderProps: string;
  // eslint-disable-next-line react/require-default-props
  onValue?: (arg: string) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholderProps,
  typeProps,
  onValue,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, /* defaultValue, error, */ registerField } = useField(
    name,
  );
  const [valueTemp, setValueTemp] = useState('');

  const handleInputChange = useCallback(
    e => {
      if (onValue) {
        onValue(e.target.value);
      }
      setValueTemp(e.target.value);
    },
    [onValue],
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input
        id={placeholderProps}
        type={typeProps}
        ref={inputRef}
        value={valueTemp}
        onChange={eForChange => {
          handleInputChange(eForChange);
        }}
        required
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
      <label className="label" htmlFor={placeholderProps}>
        {placeholderProps}
      </label>
    </Container>
  );
};

export default Input;
