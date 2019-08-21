import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  width: 100%;

  label {
    cursor: pointer;
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

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;

export const SelectImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 20px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.3);
  }
`;
