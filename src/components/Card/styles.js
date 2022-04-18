import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  background-color: #4B0082;
  padding: 10px;
  border-radius: 8px;
  margin-top: -200px;
`

export const ContentText = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`

export const Strong = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`
export const StrongValue = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #00FA9A;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color:#D2691E;
  text-decoration: underline;
`

export const Divider = styled.View`
  border: #ccc solid 0.5px;
  margin-bottom: 4px;
`