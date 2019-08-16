import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile, User } from './styles';

import logo from '../../assets/logo.svg';

import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Link to="dashboard">
          <img src={logo} alt="MeetApp" />
        </Link>
        <Profile>
          <User>
            <strong>{profile.name}</strong>
            <Link to="profile">Meu Perfil</Link>
          </User>
          <button type="button" onClick={handleSignOut}>
            Sair
          </button>
        </Profile>
      </Content>
    </Container>
  );
}
