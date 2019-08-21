import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdEvent, MdPlace } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, Content, Title, Discription } from './styles';

import error from '../../assets/error.png';

import MeetUpController from './MeetUpController';

export default function MeetUpDatails({ match }) {
  const { id } = match.params;
  const meetups = useSelector(state => state.meetup.meetups);
  const user = useSelector(state => state.user.profile);

  const selectMeetup = meetups[id];

  console.tron.log(selectMeetup);

  return (
    <Container>
      <Content>
        <Title>
          <strong>{selectMeetup.title}</strong>
          <MeetUpController major={selectMeetup.user_id === user.id} />
        </Title>
        <div className="image">
          <img
            src={selectMeetup.File ? selectMeetup.File.url : error}
            alt="MeetUp"
          />
        </div>
        <Discription>{selectMeetup.description}</Discription>
        <time>
          <MdEvent size={20} color="#fff" style={{ marginRight: 5 }} />
          {selectMeetup.dateFormatted}
        </time>
        <local>
          <MdPlace size={20} color="#fff" style={{ marginRight: 5 }} />
          {selectMeetup.localization}
        </local>
      </Content>
    </Container>
  );
}

MeetUpDatails.propTypes = {
  match: PropTypes.object.isRequired,
};
