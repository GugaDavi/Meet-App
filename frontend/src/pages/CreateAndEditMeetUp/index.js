import React, { useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { MdCamera, MdAddCircleOutline } from 'react-icons/md';

import { Container, Image } from './styles';

import SelectDate from './DatePicker';

export default function CreateAndEditMeetUp() {
  const [date, setDate] = useState();

  function handleNewMeetup(data) {
    console.tron.log(date);
  }

  return (
    <Container>
      <Form onSubmit={handleNewMeetup}>
        <Image>
          <MdCamera size={55} color="#fff" />
          <strong>Selecionar Foto</strong>
        </Image>
        <Input placeholder="Titulo do MeetUp" name="title" />
        <Textarea placeholder="Descrição" name="discription" />
        <Input placeholder="Localização" name="localization" />
        <SelectDate selected={date} onChange={d => setDate(d)} />
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar MeetUp
        </button>
      </Form>
    </Container>
  );
}
