import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  padding: 30px 0px;
  max-width: 1024px;
  height: 72px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Profile = styled.div`
  display: flex;
  color: #fff;
  background: none;

  button {
    border: 0px;
    border-radius: 4px;
    padding: 12px 20px;
    background: #d44059;
    color: #fff;
    font-size: 16px;
    line-height: 19px;
  }
`;
export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  padding-right: 20px;
  border-right: 1px solid rgba(238, 238, 238, 0.3);

  strong {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 2px;
  }

  a {
    font-size: 12px;
    line-height: 16px;
  }
`;
