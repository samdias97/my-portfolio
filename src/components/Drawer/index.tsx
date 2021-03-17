import React, { useCallback, useState } from 'react';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { IDrawerProps } from '../../store/modules/drawer/types';
import { changeStateDrawer } from '../../store/modules/drawer/actions';
import Logo from '../../assets/sam2.jpg';
import { Container, Header, Menu, Info, ShowDrawer } from './styles';

const Drawer: React.FC = () => {
  const dispatch = useDispatch();
  const stateDrawer = useSelector<IState, IDrawerProps>(
    stateTemp => stateTemp.drawer,
  );

  const [show, setShow] = useState(!stateDrawer.state);

  const handleChangeStateDrawer = useCallback(() => {
    if (window.innerWidth <= 1200) {
      setShow(!show);
      dispatch(changeStateDrawer(show));
    } else {
      setShow(true);
      dispatch(changeStateDrawer(false));
    }
  }, [dispatch, show]);

  const mql = window.matchMedia('(max-width: 1200px)');

  mql.addEventListener('change', () => {
    setShow(true);
  });

  return (
    <>
      {show && (
        <Container>
          <Header>
            <header>
              <Link to="/">
                <img src={Logo} alt="Sam" />
              </Link>
              <p>Web Developer</p>
            </header>
          </Header>
          <Menu>
            <Link to="/" onClick={handleChangeStateDrawer}>
              Sobre
            </Link>
            <Link to="/skills" onClick={handleChangeStateDrawer}>
              Habilidades
            </Link>
            <Link to="/experiences" onClick={handleChangeStateDrawer}>
              Experiências
            </Link>
            <Link to="/contact" onClick={handleChangeStateDrawer}>
              Contato
            </Link>
          </Menu>
          <Info>
            <a
              href="https://www.linkedin.com/in/samuel-dias-43b931173/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size={23} />
            </a>
            <a
              href="https://www.instagram.com/samuel.sdias/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram size={23} />
            </a>
            <a
              href="https://github.com/samdias97"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={23} />
            </a>
          </Info>
        </Container>
      )}

      <ShowDrawer>
        {show ? (
          <AiOutlineClose size={40} onClick={handleChangeStateDrawer} />
        ) : (
          <AiOutlineMenu size={40} onClick={handleChangeStateDrawer} />
        )}
      </ShowDrawer>
    </>
  );
};

export default Drawer;
