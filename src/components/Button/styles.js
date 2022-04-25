import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
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

  iconWrapper: {
    width: 56,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
  },

  icon: {
    width: 24,
    height: 28,
  },
});