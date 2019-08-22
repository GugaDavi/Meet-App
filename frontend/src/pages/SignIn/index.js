import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSignIn({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form onSubmit={handleSignIn} autoComplete="off">
        <Input placeholder="Digite seu e-mail" name="email" type="email" />
        <Input placeholder="Digite seu senha" name="password" type="password" />
        <button type="submit">Acessar</button>
      </Form>
      <Link to="/register">Criar Conta</Link>
    </>
  );
}
