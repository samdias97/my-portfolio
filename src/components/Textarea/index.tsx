import React, {
  useCallback,
  useEffect,
  useRef,
  TextareaHTMLAttributes,
  useState,
} from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholderProps: string;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholderProps,
  ...rest
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!textareaRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container focus={isFocused} blur={isFilled} error={!!error}>
      <textarea
        id={placeholderProps}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={textareaRef}
        {...rest}
      />

      <label className="label" htmlFor={placeholderProps}>
        {placeholderProps}
      </label>
    </Container>
  );
};

export default Textarea;
