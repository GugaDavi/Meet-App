import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container } from './styles';

import { updateProfileRequest } from '../../store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string(),
  oldPassword: Yup.string().when('password', (password, oldPassword) =>
    password
      ? oldPassword.required('Senha atual necessaria para atualização')
      : oldPassword
  ),
  confirmPassword: Yup.string(),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleUpdateProfile(data) {
    const { password, confirmPassword } = data;

    console.tron.log(password, confirmPassword);

    if (password !== confirmPassword) {
      return toast.error('Senha e Confirmação não conferem');
    }

    return dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form
        schema={schema}
        initialData={profile}
        onSubmit={handleUpdateProfile}
        autoComplete="off"
      >
        <Input placeholder="Digite seu nome" name="name" />
        <Input placeholder="Digite seu email" name="email" />
        <hr />
        <Input type="password" placeholder="Senha Atual" name="oldPassword" />
        <Input type="password" placeholder="Nova Senha" name="password" />
        <Input
          type="password"
          placeholder="Confirme a nova senha"
          name="confirmPassword"
        />
        <button type="submit">
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
