import React from 'react';

import { Container } from './styles';

interface IPropsMinimalistModal {
  showModalProps: boolean;
}

const MinimalistModal: React.FC<IPropsMinimalistModal> = ({
  showModalProps,
}: IPropsMinimalistModal) => {
  return <Container showModal={showModalProps} />;
};

export default MinimalistModal;
