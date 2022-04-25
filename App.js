import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import DollaSvg from './src/assets/dollarLottie.json';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';

export default function App() {
  const [loop, setLoop] = useState(true);
  useEffect(
    () => {
      let timer = setTimeout(() => setLoop(false), 5000);
      return () => {
        clearTimeout(timer);
      };
    }, []);

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
    <NavigationContainer>
      <StatusBar style="light" />
      <Routes />
    </NavigationContainer>
  );
}
