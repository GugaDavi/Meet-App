import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Header, CreateMeetUp, MeetUpsList, Infos } from './styles';

export default function Dashboard() {
  const meetUpList = useSelector(state => state.meetup.meetups);

  return (
    <Container>
      <Header>
        <strong>MeetUps</strong>
        <CreateMeetUp to="/meetup">
          <MdAddCircleOutline
            size={20}
            color="#fff"
            style={{ marginRight: 5 }}
          />
          Novo MeetUp
        </CreateMeetUp>
      </Header>
      <MeetUpsList>
        {meetUpList
          ? meetUpList.map((meetup, index) => (
              <li key={meetup.id} active={!!meetup.canceled_at}>
                <strong>{meetup.title}</strong>

                <Infos>
                  {meetup.canceled_at && (
                    <strong className="eventStatus">Evento Cancelado</strong>
                  )}
                  <time>{meetup.dateFormatted}</time>
                  <Link to={`meetup-datails/${index}`}>
                    <MdChevronRight size={24} color="#fff" />
                  </Link>
                </Infos>
              </li>
            ))
          : null}
      </MeetUpsList>
    </Container>
  );
}
