import React, { useEffect, useMemo, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, Date, MeetUpsList } from './styles';

import Background from '../../components/Background';
import Card from '../../components/Card';

import { meetUpListRequest } from '../../store/modules/meetup/actions';

function Dashboard({ navigation, isFocused }) {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);
  const registers = useSelector(state => state.register.registers);
  const profile = useSelector(state => state.user.profile);

  function reloadMeetups() {
    dispatch(meetUpListRequest());
  }

  useEffect(() => {
    if (isFocused) {
      reloadMeetups();
    }
  }, [isFocused]);

  function handleInscription(meetup) {
    navigation.navigate('ConfirmInscription', { meetup });
  }

  return (
    <Background>
      <Container>
        <Date>Meetups</Date>
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
              textButton="Inscrever-se"
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

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
  isFocused: PropTypes.bool,
}

Dashboard.defaultProps = {
  isFocused: false,
}

export default withNavigationFocus(Dashboard);
