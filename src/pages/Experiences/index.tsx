import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoadingAnimation from '../../components/LoadingAnimation';
import Drawer from '../../components/Drawer';
import CardExperience from '../../components/CardExperience';
import { IState } from '../../store';
import { IDrawerProps } from '../../store/modules/drawer/types';

import {
  Container,
  ContainerCircle,
  Content,
  ContainerLineHorizontal,
  ContainerLineVertical,
  ContainerCard,
  Title,
} from './styles';

const Experiences: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const stateDrawer = useSelector<IState, IDrawerProps>(
    stateTemp => stateTemp.drawer,
  );

  console.log('stateDrawer.state: ', stateDrawer.state);

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

          <Content displayMobile={stateDrawer.state}>
            <Title>Experiências</Title>
            <ContainerCard classCard="right">
              <ContainerCircle line="bottom">
                <ContainerLineVertical lineCard />
              </ContainerCircle>
              <ContainerLineHorizontal />
              <CardExperience
                direction="right"
                title="Desenvolvedor FrontEnd ReactJS com TypeScript"
                date="out de 2020 - Present • 6 meses"
                description="Grupo Servnac • 6 meses"
              />
            </ContainerCard>
            <ContainerLineVertical />

            <ContainerCard classCard="left">
              <CardExperience
                direction="left"
                title="Desenvolvedor JavaScript Fluig"
                date="dez de 2019 - out de 2020 • 11 meses"
                description="Grupo Servnac • Tempo integral"
              />
              <ContainerLineHorizontal />
              <ContainerCircle line="center">
                <ContainerLineVertical lineCard />
              </ContainerCircle>
            </ContainerCard>
            <ContainerLineVertical />

            <ContainerCard classCard="right">
              <ContainerCircle line="center">
                <ContainerLineVertical lineCard />
              </ContainerCircle>
              <ContainerLineHorizontal />
              <CardExperience
                direction="right"
                title="Estágio de Implantação e Manutenção Protheus | TOTVS"
                date="ago de 2019 - dez de 2019 • 5 meses"
                description="Grupo Servnac • Estágio"
              />
            </ContainerCard>
            <ContainerLineVertical />

            <ContainerCard classCard="left">
              <CardExperience
                direction="left"
                title="Estágio de TI"
                date="2018 - jul de 2019 • 1 ano"
                description="OAB - Ordem dos Advogados do Brasil • Estágio"
              />
              <ContainerLineHorizontal />
              <ContainerCircle line="top">
                <ContainerLineVertical lineCard />
              </ContainerCircle>
            </ContainerCard>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Experiences;
