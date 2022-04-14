import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
// import AppLoading from 'expo-app-loading';
import { PrimaryTheme } from './src/global/theme'
import { Home } from './src/screens/Home';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
  Ubuntu_400Regular_Italic,
} from '@expo-google-fonts/ubuntu'
import { Loading } from './src/components/Loading';
import { PrimaryHeader as Header } from './src/components/Header';


export default function App() {

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
    Ubuntu_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={PrimaryTheme}>
      <Header />
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
