/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
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
  onValue?: (arg: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholderProps,
  onValue,
  ...rest
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [valueTemp, setValueTemp] = useState('');

  const handleTextareaChange = useCallback(
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
      ref: textareaRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <textarea
        id={placeholderProps}
        ref={textareaRef}
        value={valueTemp}
        onChange={eForChange => {
          handleTextareaChange(eForChange);
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

export default Textarea;
