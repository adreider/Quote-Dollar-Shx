import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  label: {
    marginTop: 10,
    fontSize: 18,
    color: "#e7d9b4"
  },

  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  field: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  column: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  divider: {
    marginRight: 4,
    fontSize: 18,
    color: "#a5c8ca",
  },

  caracteresLimit: {
    fontSize: 13,
  },

  button: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a5c8ca'
  },

  title: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    color: '#fff'
  },

  footer:{
    marginVertical: 20,
    marginBottom: 36, 
  }
});

import styled from 'styled-components/native';

export const ContentText = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 270px;
`

export const Strong = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-top: 4px;
  color: #fff;
`
export const StrongValue = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #00FA9A;
`

export const Divider = styled.View`
  border: #ccc solid 2px;
  margin-top: 10px;
  border-radius: 30px;
`