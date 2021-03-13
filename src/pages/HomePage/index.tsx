import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

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
            <div className="center">
              <button
                type="button"
                className="btn"
                onClick={() => history.push('/contact')}
              >
                <svg
                  width="180px"
                  height="60px"
                  viewBox="0 0 180 60"
                  className="border"
                >
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    className="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    className="hl-line"
                  />
                </svg>
                <span>Contato</span>
              </button>
            </div>
          </Title>
        </Container>
      )}
    </>
  );
};

export default HomePage;
