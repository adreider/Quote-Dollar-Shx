import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000
`;

export const Header = styled.ImageBackground`
  width: 100%;
  height: 86%;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  margin-top: 20px;
  font-weight: bold;
  background-color: #333;
  padding: 5px;
  border-radius:8px;
`