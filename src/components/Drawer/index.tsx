import React, { useCallback, useState } from 'react';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeStateDrawer } from '../../store/modules/drawer/actions';
import Logo from '../../assets/sam2.jpg';
import { Container, Header, Menu, Info, ShowDrawer } from './styles';

const Drawer: React.FC = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const handleChangeStateDrawer = useCallback(() => {
    setShow(!show);
    dispatch(changeStateDrawer(show));
  }, [dispatch, show]);

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
            <Link to="/">Sobre</Link>
            <Link to="/">Habilidades</Link>
            <Link to="/">Experiências</Link>
            <Link to="/">Contato</Link>
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
