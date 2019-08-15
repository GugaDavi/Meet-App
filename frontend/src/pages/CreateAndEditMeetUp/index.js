import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdCamera, MdAddCircleOutline } from 'react-icons/md';

import { Container, Image } from './styles';

export default function CreateAndEditMeetUp() {
  return (
    <Container>
      <Form>
        <Image>
          <MdCamera size={55} color="#fff" />
          <strong>Selecionar Foto</strong>
        </Image>
        <Input name="title" />
        <Input name="discription" />
        <Input name="localization" />
        <Input type="date" name="date" />
        <button type="button">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar MeetUp
        </button>
      </Form>
    </Container>
  );
}
