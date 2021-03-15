import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoadingAnimation from '../../components/LoadingAnimation';
import Drawer from '../../components/Drawer';
import Cards3D from '../../components/Cards3D';
import { IState } from '../../store';
import { IDrawerProps } from '../../store/modules/drawer/types';

import { Container, ContainerCards } from './styles';

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
            <h1 id="contactTitle">Habilidades</h1>
            <div id="containerCards">
              <Cards3D />
            </div>
          </ContainerCards>
        </Container>
      )}
    </>
  );
};

export default Skills;
