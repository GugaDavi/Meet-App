import React from 'react';
import { MdEvent, MdPlace } from 'react-icons/md';

import { Container, Content, Title, Discription } from './styles';

import MeetUpController from './MeetUpController';

import meetup from '../../assets/image.png';

export default function MeetUpDatails() {
  return (
    <Container>
      <Content>
        <Title>
          <strong>MeetUp de React Native</strong>
          <MeetUpController major />
        </Title>
        <img src={meetup} alt="MeetUp" />
        <Discription>Um MeetUp Massa Legal. Show de Boleta</Discription>
        <time>
          <MdEvent size={20} color="#fff" style={{ marginRight: 5 }} />
          24 de Junho, às 20h
        </time>
        <local>
          <MdPlace size={20} color="#fff" style={{ marginRight: 5 }} />
          Rua Guilherme Gembal
        </local>
      </Content>
    </Container>
  );
}
