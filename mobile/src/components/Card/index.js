import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import noImage from '../../assets/error.png';

import {
  Container,
  Banner,
  Infos,
  Title,
  Datails,
  Date,
  Description,
  Local,
  Manager,
  Inscription,
} from './styles';

export default function Card({
  banner,
  title,
  local,
  date,
  description,
  manager,
}) {
  return (
    <Container>
      <Banner source={{ uri: banner || noImage }} />
      <Infos>
        <Title>{title}</Title>
        <Datails>
          <Date>
            <Icon
              name="event"
              size={15}
              color="#999"
              style={{ marginRight: 10 }}
            />
            <Text>{date}</Text>
          </Date>
          <Description>
            <Icon
              name="description"
              size={15}
              color="#999"
              style={{ marginRight: 10 }}
            />
            <Text>{description}</Text>
          </Description>
          <Local>
            <Icon
              name="place"
              size={15}
              color="#999"
              style={{ marginRight: 10 }}
            />
            <Text>{local}</Text>
          </Local>
        </Datails>
        {manager ? (
          <Manager>Você é o responsavel por esse evento</Manager>
        ) : (
          <Inscription>Realizar Inscrição</Inscription>
        )}
      </Infos>
    </Container>
  );
}
