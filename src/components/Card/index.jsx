import { View, Text } from 'react-native';
import { styles } from './styles';
import { useState, useEffect } from 'react';



export function Card() {
  const [dados, setDados] = useState();

  useEffect(() => {
    fetch(`https://economia.awesomeapi.com.br/json/daily/USD-BRL/5`)
      .then(response => response.json())
      .then(data => {
        console.log(data[0].ask)
        setDados(data)
      })
  }, []);
  const api = { 'foo': 'bar', 'foz': 'baz'};
  return (
    <View style={styles.container}>
      {Object.entries(api).map(([key, value]) => {
        return <Text key={key}>{value}</Text>
      })}
    </View>
  )
}