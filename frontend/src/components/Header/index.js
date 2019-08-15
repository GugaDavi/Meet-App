import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile, User } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="dashboard">
          <img src={logo} alt="MeetApp" />
        </Link>
        <Profile>
          <User>
            <strong>Gustavo davi</strong>
            <Link to="profile">Meu Perfil</Link>
          </User>
          <button type="button">Sair</button>
        </Profile>
      </Content>
    </Container>
  );
}
