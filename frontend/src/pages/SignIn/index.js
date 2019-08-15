import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  function handleSignIn() {}

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form onSubmit={handleSignIn}>
        <Input placeholder="Digite seu e-mail" name="email" type="email" />
        <Input placeholder="Digite seu senha" name="password" type="password" />
        <button type="button">Acessar</button>
      </Form>
      <Link to="/register">Criar Conta</Link>
    </>
  );
}
