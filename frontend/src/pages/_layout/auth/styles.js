import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eee;

  a {
    color: #fff;
    opacity: 0.8;
    font-size: 16px;
    line-height: 19px;
  }
`;
export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      border: 0px;
      border-radius: 4px;
      background: rgba(0, 0, 0);
      opacity: 0.2;
      padding: 14px 20px;
      font-size: 18px;
      color: #fff;
      line-height: 21px;

      & + input {
        margin-top: 10px;
      }
    }

    button {
      background: #f94d6a;
      border-radius: 4px;
      font-size: 18px;
      line-height: 21px;
      border: 0px;
      padding: 13px 0px 15px;
      margin: 15px 0px;
      color: #eee;
      transition: background 0.3s linear;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
  }
`;
