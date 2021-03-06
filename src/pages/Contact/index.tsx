import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import getValidationErrors from '../../utils/getValidationErrors';
import mapPin from '../../assets/pin.svg';
import Drawer from '../../components/Drawer';
import LoadingAnimation from '../../components/LoadingAnimation';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import { IState } from '../../store';
import { IDrawerProps } from '../../store/modules/drawer/types';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import LoadingAnimationMessage from '../../components/LoadingAnimationMessage';

import {
  Container,
  Content,
  Title,
  FormContainer,
  MapTemp,
  PanelLocation,
  ContentAll,
} from './styles';

interface IFields {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

const Contact: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const initialPosition = { lat: -3.7401651, lng: -38.6013957 };
  const stateDrawer = useSelector<IState, IDrawerProps>(
    stateTemp => stateTemp.drawer,
  );

  const mapPinIcon = Leaflet.icon({
    iconUrl: mapPin,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  });

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  }, []);

  const handleSubmit = useCallback(
    async (data: IFields) => {
      setShowLoadingMessage(true);

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome é obrigatório!'),
          email: Yup.string()
            .required('E-mail é obrigatório!')
            .email('Digite um email válido!'),
          assunto: Yup.string().required('Assunto é obrigatório!'),
          mensagem: Yup.string().required('Mensagem é obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        api
          .post('/send', {
            nome: data.nome,
            email: data.email,
            assunto: data.assunto,
            mensagem: data.mensagem,
          })
          .then(() => {
            setShowLoadingMessage(false);
            addToast({
              type: 'success',
              title: 'Mensagem enviada',
              description:
                'A sua mensagem foi enviada para a minha caixa de e-mails, irei respondê-la o mais breve possível.',
            });
          })
          .catch(() => {
            setShowLoadingMessage(false);
            addToast({
              type: 'error',
              title: 'Erro no envio',
              description:
                'Ocorreu um erro ao enviar a mensagem, tente novamente.',
            });
          });
      } catch (err) {
        setShowLoadingMessage(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: 'Erro no envio',
            description:
              'Existem campos obrigatórios não preenchidos, favor verificar.',
          });
        } else {
          addToast({
            type: 'error',
            title: 'Erro no envio',
            description:
              'Ocorreu um erro ao enviar a mensagem, tente novamente.',
          });
        }
      }
    },
    [addToast],
  );

  return (
    <>
      {showLoading ? (
        <LoadingAnimation />
      ) : (
        <Container>
          <Drawer />

          <ContentAll>
            {showLoadingMessage && <LoadingAnimationMessage />}
            <Content displayMobile={stateDrawer.state}>
              <Title>
                <h1>Contato</h1>
                <p>
                  Estou interessado em oportunidades de crescimento na área de
                  desenvolvimento web, especialmente contribuindo em projetos
                  ambiciosos e criativos. Caso tenha algum interesse ou dúvida,
                  não hesite me enviar uma mensagem pelo formulário abaixo.
                </p>
              </Title>
              <FormContainer>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <ul>
                    <li>
                      <Input
                        name="nome"
                        typeProps="text"
                        placeholderProps="Nome"
                      />
                    </li>
                    <li>
                      <Input
                        name="email"
                        typeProps="text"
                        placeholderProps="Email"
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Input
                        name="assunto"
                        typeProps="text"
                        placeholderProps="Assunto"
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Textarea name="mensagem" placeholderProps="Mensagem" />
                    </li>
                  </ul>
                  <div className="center">
                    <button type="submit" className="btn">
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
                      <span>Enviar</span>
                    </button>
                  </div>
                </Form>
              </FormContainer>
            </Content>
            <MapTemp displayMobile={stateDrawer.state}>
              <PanelLocation>
                <p>Antônio Berreza</p>
                <p>Fortaleza, CE</p>
                <p>
                  <strong>@</strong>: samuel.myportfolio@gmail.com
                </p>
              </PanelLocation>
              <MapContainer
                center={initialPosition}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
              >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
                />

                <Marker
                  icon={mapPinIcon}
                  position={[-3.7401651, -38.6013957]}
                />
              </MapContainer>
            </MapTemp>
          </ContentAll>
        </Container>
      )}
    </>
  );
};

export default Contact;
