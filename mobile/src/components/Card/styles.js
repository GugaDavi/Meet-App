import styled from 'styled-components/native';

import Button from '../Button';

export const Container = styled.View`
  flex: 1;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
`;
export const Banner = styled.Image`
  justify-content: center;
  height: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
export const Infos = styled.View`
  background: #fff;
  padding: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
export const Title = styled.Text`
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  color: #333;
`;
export const Datails = styled.View`
  margin: 10px 0px 15px;
  color: #999;
  font-size: 13px;
  line-height: 15px;
`;
export const Date = styled.View`
  align-items: center;
  flex-direction: row;
`;
export const Local = styled.View`
  align-items: center;
  flex-direction: row;
`;
export const Description = styled.View`
  align-items: center;
  flex-direction: row;
`;
export const Inscription = styled(Button)`
  opacity: ${props => (props.manager ? 0.6 : 1)};
`;
export const Manager = styled.Text`
  text-align: center;
  color: #f94d6a;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;
