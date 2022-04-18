import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { Home } from './src/screens/Home';
import { PrimaryHeader as Header } from './src/components/Header';
import LottieView from 'lottie-react-native';
import DollaSvg from './src/assets/dollarLottie.json';

export default function App() {
  const [loop, setLoop] = useState(true);
  useEffect(
    () => {
      let timer = setTimeout(() => setLoop(false), 5000);
      return () => {
        clearTimeout(timer);
      };
    },[]);

  if (loop === true) {
    return (
      <LottieView
        autoPlay
        loop={loop}
        source={DollaSvg}
        style={{ backgroundColor: "#000" }}
     />
    )
  }

  return (
    <>
      <Header>
      </Header>
      <View style={styles.container}>
        <Home />
        <StatusBar style="light" />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});