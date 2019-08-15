import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      & + input {
        margin-top: 10px;
      }
      padding: 14px 20px;
      border-radius: 4px;
      border: 0px;
      background: rgba(0, 0, 0, 0.2);
    }

    button {
      max-width: 180px;
      margin-top: 20px;
      padding: 12px 25px;
      border: 0;
      border-radius: 4px;
      background: #f94d6a;
      font-size: 16px;
      line-height: 19px;
      color: #fff;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 300px;
  margin: 0px auto;
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  strong {
    margin-top: 10px;
    font-size: 20px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.3);
  }
`;
