import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Drawer from '../../components/Drawer';
import { IState } from '../../store';
import { IDrawerProps } from '../../store/modules/drawer/types';
import LoadingAnimation from '../../components/LoadingAnimation';
import { Container, Title } from './styles';

const HomePage: React.FC = () => {
  const stateDrawer = useSelector<IState, IDrawerProps>(
    stateTemp => stateTemp.drawer,
  );
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {showLoading ? (
        <LoadingAnimation />
      ) : (
        <Container>
          <Drawer />

          <Title displayMobile={stateDrawer.state}>
            <div>
              <h1>Oi, </h1>
              <h1>Eu me chamo Samuel </h1>
              <h1>E sou um desenvolvedor web </h1>
              <p>Front End Developer</p>
            </div>
          </Title>
        </Container>
      )}
    </>
  );
};

export default HomePage;
