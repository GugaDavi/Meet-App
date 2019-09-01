import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  registerListRequest,
  cancelRegisterRequest,
} from '../../store/modules/register/actions';

import { Container, Title, MeetUpsList } from './styles';
import Background from '../../components/Background';
import Card from '../../components/Card';

function Inscription({ isFocused }) {
  const dispatch = useDispatch();
  const registers = useSelector(state => state.register.registers);

  useEffect(() => {
    if (isFocused) {
      dispatch(registerListRequest());
    }
  }, [isFocused]);

  console.tron.log(registers);

  function handleCancelInscription(inscriptionId) {
    dispatch(cancelRegisterRequest(inscriptionId));
  }

  return (
    <Background>
      <Container>
        <Title>Inscrições</Title>
        <MeetUpsList
          data={registers}
          keyExtractor={register => String(register.id)}
          renderItem={({ item }) => (
            <Card
              banner={item.Meetup.File ? item.Meetup.File.url : null}
              title={item.Meetup.title}
              local={item.Meetup.localization}
              date={item.dateFormatted}
              description={item.Meetup.description}
              onPress={() => handleCancelInscription(item.id)}
              textButton="Cancelar Inscrição"
            />
          )}
        />
      </Container>
    </Background>
  );
}

Inscription.propTypes = {
  isFocused: PropTypes.bool,
}

Inscription.defaultProps = {
  isFocused: false,
}

export default withNavigationFocus(Inscription);
