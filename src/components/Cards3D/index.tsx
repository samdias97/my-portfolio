import React from 'react';
import { ParallaxDepthCard } from 'experiment-parallax-depth-card';
import data from './data';
import 'experiment-parallax-depth-card/dist/index.css';
import { Container } from './styles';

const Cards3D: React.FC = () => {
  return (
    <Container>
      {data.map(element => (
        <ParallaxDepthCard
          key={element.id}
          backgroundUrl={element.image}
          title={element.title}
        />
      ))}
    </Container>
  );
};

export default Cards3D;
