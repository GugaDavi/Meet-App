import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Insira um nome de usuario'),
  email: Yup.string()
    .email()
    .required('Insira um e-mail valido'),
  password: Yup.string()
    .min(6)
    .required('Senha é obrigatoria, minimo de 6 digitos'),
  confirmPassword: Yup.string().min(6),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSignOut({ name, email, password, confirmPassword }) {
    if (password !== confirmPassword) {
      return toast.error('Senhas não conferem');
    }
    return dispatch(signUpRequest(name, email, password, confirmPassword));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form onSubmit={handleSignOut} schema={schema} autoComplete="off">
        <Input placeholder="Digite seu Nome" name="name" autoComplete="off" />
        <Input placeholder="Digite seu e-mail" name="email" type="email" />
        <Input placeholder="Digite seu senha" name="password" type="password" />
        <Input
          placeholder="Confirme sua senha"
          name="confirmPassword"
          type="password"
        />
        <button type="submit">Criar Conta</button>
      </Form>
    </>
  );
}
