import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin: 50px 0px;
  color: #fff;

  display: flex;
  justify-content: space-between;

  strong {
    font-size: 38px;
    line-height: 41px;
  }
`;
export const CreateMeetUp = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 25px;
  background: #f94d6a;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
`;
export const MeetUpsList = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
    transition: background 0.2s linear;

    & + li {
      margin-top: 10px;
    }

    strong {
      font-size: 18px;
      line-height: 21px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 19px;

  time {
    margin-right: 30px;
  }
`;
