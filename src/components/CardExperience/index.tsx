import React, { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { Container } from './styles';

interface IProps {
  direction: 'left' | 'right';
  title: string;
  date: string;
  description: string;
}

const CardExperience: React.FC<IProps> = ({
  direction,
  title,
  date,
  description,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container directionProps={direction}>
      <h1>{title}</h1>
      <hr />
      <h3>{date}</h3>
      <footer>
        <h4>{description}</h4>
        <FiMoreHorizontal size={24} onClick={() => setShowModal(true)} />
      </footer>
    </Container>
  );
};

export default CardExperience;
