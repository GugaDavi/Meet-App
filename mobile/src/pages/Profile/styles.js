import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;
export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const Separator = styled.View`
  height: 0px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 30px 0 20px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
