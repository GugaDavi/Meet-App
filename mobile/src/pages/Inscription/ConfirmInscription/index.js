import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

import { Container, Confim } from './styles';
import Background from '../../../components/Background';

import Card from '../../../components/Card';

export default function ConfirmInscription({ navigation }) {
  const meetup = navigation.getParam('meetup');

  async function handleConfirm(meetupId) {
    await api.post(`inscriptions/${meetupId}`);

    navigation.navigate('Inscription');
  }

  return (
    <Background>
      <Container>
        <Confim>
          <Card
            banner={meetup.File ? meetup.File.url : null}
            title={meetup.title}
            local={meetup.localization}
            date={meetup.dateFormatted}
            description={meetup.description}
            onPress={() => handleConfirm(meetup.id)}
          />
        </Confim>
      </Container>
    </Background>
  );
}

ConfirmInscription.navigationOptions = ({ navigation }) => ({
  title: 'Confirmação de Inscrição',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
