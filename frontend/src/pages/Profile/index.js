import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input placeholder="Digite seu nome" name="name" />
        <Input placeholder="Digite seu email" name="email" />
        <hr />
        <Input placeholder="Senha Atual" name="password" />
        <Input placeholder="Nova Senha" name="password" />
        <Input placeholder="Confirme a nova senha" name="password" />
        <button type="button">
          <MdAddCircleOutline
            size={20}
            color="#fff"
            style={{ marginRight: 5 }}
          />
          Atualizar Perfil
        </button>
      </Form>
    </Container>
  );
}
