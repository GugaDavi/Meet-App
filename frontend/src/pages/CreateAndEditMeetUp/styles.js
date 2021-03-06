import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      padding: 14px 20px;
      border-radius: 4px;
      border: 0px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 10px;
    }

    textarea {
      margin: 10px 0px;
      padding: 14px 20px;
      border-radius: 4px;
      border: 0px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      font-size: 18px;
      line-height: 21px;
      font-family: Roboto;
      height: 150px;
    }

    > button {
      max-width: 180px;
      margin-top: 20px;
      padding: 12px 25px;
      border: 0;
      border-radius: 4px;
      background: #f94d6a;
      font-size: 16px;
      line-height: 19px;
      color: #fff;
      transition: background 0.3s;

      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
  }
`;
