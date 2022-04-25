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

  footer:{
    marginVertical: 20,
    marginBottom: 36, 
  }
});