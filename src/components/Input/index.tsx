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
}

const Input: React.FC<InputProps> = ({
  name,
  placeholderProps,
  typeProps,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container focus={isFocused} blur={isFilled} error={!!error}>
      <input
        id={placeholderProps}
        type={typeProps}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      <label className="label" htmlFor={placeholderProps}>
        {placeholderProps}
      </label>
    </Container>
  );
};

export default Input;
