import React from 'react';
import Lottie from 'lottie-react-web';
import animation from './loading-line.json';

import { Container } from './styles';

const LoadingAnimation: React.FC = () => (
  <Container>
    <Lottie
      options={{
        animationData: animation,
        loop: true,
      }}
      speed={1}
    />
  </Container>
);

export default LoadingAnimation;
