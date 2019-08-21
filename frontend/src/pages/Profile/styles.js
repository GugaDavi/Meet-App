import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    input {
      & + input {
        margin-top: 10px;
      }
      padding: 14px 20px;
      border: 0px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
    }

    hr {
      margin: 30px 0px 19px;
      border: 1px solid rgba(238, 238, 238, 0.2);
    }

    button {
      max-width: 200px;
      border: 0px;
      background: #f94d6a;
      padding: 12px 25px;
      border-radius: 4px;
      margin-top: 20px;
      font-size: 16px;
      line-height: 19px;
      color: #fff;
      transition: background 0.3s;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }

    span {
      margin: 5px 0px;
      text-align: left;
      color: #f2994a;
    }
  }
`;
