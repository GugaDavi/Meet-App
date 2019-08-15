import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Header, CreateMeetUp, MeetUpsList, Infos } from './styles';

export default function Dashboard() {
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
        <li>
          <strong>React Native</strong>
          <Infos>
            <time>24 de Junho, às 20h</time>
            <Link to="meetup-datails">
              <MdChevronRight size={24} color="#fff" />
            </Link>
          </Infos>
        </li>
        <li>
          <strong>React Native</strong>
          <Infos>
            <time>24 de Junho, às 20h</time>
            <Link to="meetup-datails">
              <MdChevronRight size={24} color="#fff" />
            </Link>
          </Infos>
        </li>
        <li>
          <strong>React Native</strong>
          <Infos>
            <time>24 de Junho, às 20h</time>
            <Link to="meetup-datails">
              <MdChevronRight size={24} color="#fff" />
            </Link>
          </Infos>
        </li>
        <li>
          <strong>React Native</strong>
          <Infos>
            <time>24 de Junho, às 20h</time>
            <Link to="meetup-datails">
              <MdChevronRight size={24} color="#fff" />
            </Link>
          </Infos>
        </li>
      </MeetUpsList>
    </Container>
  );
}
