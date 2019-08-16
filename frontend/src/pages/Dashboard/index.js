import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Header, CreateMeetUp, MeetUpsList, Infos } from './styles';

import api from '../../services/api';

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule');

      const date = response.data.meetups.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "dd 'de' MMMM, 'às' HH'h'",
          {
            locale: pt,
          }
        ),
      }));

      setSchedule(date);
    }

    loadSchedule();
  }, [schedule]);

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
        {schedule.map(meetup => (
          <li>
            <strong>{meetup.title}</strong>
            <Infos>
              <time>{meetup.dateFormatted}</time>
              <Link to="meetup-datails">
                <MdChevronRight size={24} color="#fff" />
              </Link>
            </Infos>
          </li>
        ))}
      </MeetUpsList>
    </Container>
  );
}
