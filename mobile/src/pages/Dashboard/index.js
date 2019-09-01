import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Date, MeetUpsList } from './styles';

import Background from '../../components/Background';
import Card from '../../components/Card';

export default function Dashboard({ navigation }) {
  const meetups = useSelector(state => state.meetup.meetups);
  const profile = useSelector(state => state.user.profile);

  function handleInscription(meetup) {
    navigation.navigate('ConfirmInscription', { meetup });
  }

  return (
    <Background>
      <Container>
        <Date>31 Agosto</Date>
        <MeetUpsList
          data={meetups}
          keyExtractor={meetup => String(meetup.id)}
          renderItem={({ item }) => (
            <Card
              banner={item.File ? item.File.url : null}
              title={item.title}
              local={item.localization}
              date={item.dateFormatted}
              description={item.description}
              manager={item.user_id === profile.id}
              onPress={() => handleInscription(item)}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'MeetUps',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
