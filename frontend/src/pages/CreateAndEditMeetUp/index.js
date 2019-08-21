import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

import SelectDate from './DatePicker';
import BannerInput from './BannerInput';

import { createMeetUpRequest } from '../../store/modules/meetup/actions';

export default function CreateAndEditMeetUp() {
  const dispatch = useDispatch();

  const [date, setDate] = useState();

  function handleNewMeetup(data) {
    dispatch(createMeetUpRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleNewMeetup}>
        <BannerInput name="banner_id" />
        <Input placeholder="Titulo do MeetUp" name="title" />
        <Input multiline placeholder="Descrição" name="description" />
        <Input placeholder="Localização" name="localization" />
        <SelectDate selected={date} setSelected={setDate} name="date" />
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar MeetUp
        </button>
      </Form>
    </Container>
  );
}
