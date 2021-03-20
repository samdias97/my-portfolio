import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoadingAnimation from '../../components/LoadingAnimation';
import Drawer from '../../components/Drawer';
import Cards3D from '../../components/Cards3D';
import { IState } from '../../store';
import { IDrawerProps } from '../../store/modules/drawer/types';

import { Container, ContainerCards, Title, ContainerCards3D } from './styles';

const Skills: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const stateDrawer = useSelector<IState, IDrawerProps>(
    stateTemp => stateTemp.drawer,
  );

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
          <ContainerCards displayMobile={stateDrawer.state}>
            <Title>Habilidades</Title>
            <ContainerCards3D>
              <Cards3D />
            </ContainerCards3D>
          </ContainerCards>
        </Container>
      )}
    </>
  );
};

export default Skills;
