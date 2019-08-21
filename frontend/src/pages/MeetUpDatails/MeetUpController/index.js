import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

import { Container, Manager, Canceled } from './styles';

import { cancelMeetUpRequest } from '../../../store/modules/meetup/actions';

export default function MeetUpController({ canceled, meetupId }) {
  const dispatch = useDispatch();

  function handleCancelMeetup(meetuId) {
    dispatch(cancelMeetUpRequest(meetuId));
  }

  return (
    <Container>
      {canceled ? (
        <Canceled>
          <strong>Evento Cancelado</strong>
        </Canceled>
      ) : (
        <Manager>
          <button className="edit" type="button">
            <MdEdit size={20} color="#fff" style={{ marginRight: 5 }} />
            Editar
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => handleCancelMeetup(meetupId)}
          >
            <MdDeleteForever
              size={20}
              color="#fff"
              style={{ marginRight: 5 }}
            />
            Cancelar
          </button>
        </Manager>
      )}
    </Container>
  );
}

MeetUpController.propTypes = {
  canceled: PropTypes.bool.isRequired,
  meetupId: PropTypes.number.isRequired,
};
