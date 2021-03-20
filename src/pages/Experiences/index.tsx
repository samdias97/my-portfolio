import React, { useState, useEffect, useCallback } from 'react';
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

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  }, []);

  const monthsCounter = useCallback((): number => {
    const dateTimeInit = new Date('2020-10-01 00:00:00').getTime();
    const dateTimeNow = new Date().getTime();

    const dateTime = dateTimeNow - dateTimeInit;

    return new Date(dateTime).getMonth();
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
              <ContainerLineHorizontal animationDirection="left" />
              <CardExperience
                direction="right"
                title="Desenvolvedor FrontEnd ReactJS com TypeScript"
                date={`out de 2020 - Presente • ${monthsCounter()} meses`}
                description="Grupo Servnac • Tempo integral"
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
              <ContainerLineHorizontal animationDirection="right" />
              <ContainerCircle line="center">
                <ContainerLineVertical lineCard />
              </ContainerCircle>
            </ContainerCard>
            <ContainerLineVertical />

            <ContainerCard classCard="right">
              <ContainerCircle line="center">
                <ContainerLineVertical lineCard />
              </ContainerCircle>
              <ContainerLineHorizontal animationDirection="left" />
              <CardExperience
                direction="right"
                title="Estágio de Implantação e Manutenção Protheus | TOTVS"
                date="ago de 2019 - nov de 2019 • 4 meses"
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
              <ContainerLineHorizontal animationDirection="right" />
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
