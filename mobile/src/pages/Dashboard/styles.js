import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px 20px 0px 20px;
`;

export const Date = styled.Text`
  text-align: center;
  font-size: 20px;
  line-height: 23px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 30px;
`;

export const MeetUpsList = styled.FlatList.attrs({
  showVerticalScollIndicator: false,
})``;
