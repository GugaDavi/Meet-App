import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';

export default function SignUp() {
  function handleSignIn() {}

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form onSubmit={handleSignIn}>
        <Input placeholder="Digite seu Nome" name="name" autoComplete="off" />
        <Input placeholder="Digite seu e-mail" name="email" type="email" />
        <Input placeholder="Digite seu senha" name="password" type="password" />
        <Input
          placeholder="Confirme sua senha"
          name="confirmPassword"
          type="password"
        />
        <button type="button">Criar Conta</button>
      </Form>
    </>
  );
}
