import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

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
  onPress,
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
          <Inscription onPress={onPress}>Realizar Inscrição</Inscription>
        )}
      </Infos>
    </Container>
  );
}

Card.propTypes = {
  banner: PropTypes.string,
  title: PropTypes.string,
  local: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  manager: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

Card.defaultProps = {
  banner: '',
  title: '',
  local: '',
  date: '',
  description: '',
  manager: false,
};
