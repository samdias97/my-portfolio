import React, { useState } from 'react';
import Lottie from 'lottie-react-web';
import animation from './loading-message.json';

import { Container } from './styles';

const LoadingAnimationMessage: React.FC = () => {
  const windowWidth = window.innerWidth;
  const [changeWidthLoading, setChangeWidthLoading] = useState(
    windowWidth >= 1200 ? '20%' : '50%',
  );
  const mqlMobile = window.matchMedia('(max-width: 1200px)');
  const mqlWeb = window.matchMedia('(min-width: 1200px)');

  mqlMobile.addEventListener('change', () => {
    setChangeWidthLoading('50%');
  });

  mqlWeb.addEventListener('change', () => {
    setChangeWidthLoading('20%');
  });

  return (
    <Container>
      <Lottie
        options={{
          animationData: animation,
          loop: true,
        }}
        speed={1}
        width={changeWidthLoading}
      />
    </Container>
  );
};

export default LoadingAnimationMessage;
