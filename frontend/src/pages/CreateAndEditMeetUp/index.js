import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';

import { Container } from './styles';

import SelectDate from './DatePicker';
import BannerInput from './BannerInput';

import {
  createMeetUpRequest,
  upDateMeetUpRequest,
} from '../../store/modules/meetup/actions';

export default function CreateAndEditMeetUp({ history }) {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  const [date, setDate] = useState();

  const { state } = history.location;
  let meetupInfos;

  if (state) {
    const { meetup_id } = history.location.state;
    meetupInfos = meetups.find(meetup => meetup.id === meetup_id);
    meetupInfos.date = parseISO(meetupInfos.date);
  }

  console.tron.log(meetupInfos);

  function handleNewMeetup(data) {
    dispatch(createMeetUpRequest(data));
  }

  function handleUpdateMeetup(data) {
    dispatch(upDateMeetUpRequest(data, meetupInfos));
  }

  return (
    <Container>
      <Form
        onSubmit={
          meetupInfos === undefined ? handleNewMeetup : handleUpdateMeetup
        }
        initialData={meetupInfos}
      >
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

CreateAndEditMeetUp.propTypes = {
  history: PropTypes.object.isRequired,
};
