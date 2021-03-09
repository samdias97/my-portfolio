import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useSelector } from 'react-redux';
import mapPin from '../../assets/pin.svg';
import Drawer from '../../components/Drawer';
import LoadingAnimation from '../../components/LoadingAnimation';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import { IState } from '../../store';
import { IDrawerProps } from '../../store/modules/drawer/types';
import Token from './env';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import {
  Container,
  Content,
  Title,
  FormContainer,
  MapTemp,
  PanelLocation,
} from './styles';

interface IFields {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

const Contact: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const formRef = useRef<FormHandles>(null);
  const initialPosition = { lat: -3.7401651, lng: -38.6013957 };
  const stateDrawer = useSelector<IState, IDrawerProps>(
    stateTemp => stateTemp.drawer,
  );
  const { addToast } = useToast();

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
    (data: IFields) => {
      api
        .post('/send', {
          nome: data.nome,
          email: data.email,
          assunto: data.assunto,
          mensagem: data.mensagem,
        })
        .then(res => {
          // console.log(res.data);
        })
        .catch(err => {
          addToast();
          // console.log(err);
        });
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
          <Content displayMobile={stateDrawer.state}>
            <Title>
              <h1>Contato</h1>
              <p>
                Estou interessado em oportunidades de freelance - especialmente
                projetos ambiciosos ou grandes. No entanto, se você tiver outro
                pedido ou dúvida, não hesite em usar o formulário.
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
              <p>Rua Rui Monte, 255</p>
              <p>Antônio Berreza</p>
              <p>Fortaleza, CE</p>
              <p>
                <strong>@</strong>: samuel.sdias@hotmail.com
              </p>
            </PanelLocation>
            <MapContainer
              center={initialPosition}
              zoom={15}
              style={{ width: '100%', height: '100%' }}
            >
              {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${Token}`}
              />

              <Marker icon={mapPinIcon} position={[-3.7401651, -38.6013957]} />
            </MapContainer>
          </MapTemp>
        </Container>
      )}
    </>
  );
};

export default Contact;
