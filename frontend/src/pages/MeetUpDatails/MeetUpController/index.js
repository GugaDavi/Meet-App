import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

import { Container, Manager, NotManager } from './styles';

export default function MeetUpController({ major = false }) {
  return (
    <Container>
      {major ? (
        <Manager>
          <button className="edit" type="button">
            <MdEdit size={20} color="#fff" style={{ marginRight: 5 }} />
            Editar
          </button>
          <button type="button" className="cancel">
            <MdDeleteForever
              size={20}
              color="#fff"
              style={{ marginRight: 5 }}
            />
            Cancelar
          </button>
        </Manager>
      ) : (
        <NotManager>
          <button className="subscribe" type="button">
            Inscrever-se
          </button>
        </NotManager>
      )}
    </Container>
  );
}

MeetUpController.propTypes = {
  major: PropTypes.bool.isRequired,
};
