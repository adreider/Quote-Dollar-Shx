import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { List } from '../../components/List';
import { styles } from './styles';

export function Home() {

  const [dados, setDados] = useState();

  useEffect(() => {
    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`)
      .then(response => response.json())
      .then(data => {
        const dados = {
          venda: data.USDBRL.bid,
          compra: data.USDBRL.ask,
          codigo: data.USDBRL.code,
          maxima: data.USDBRL.high,
          minima: data.USDBRL.low,
          nome: data.USDBRL.name,
          variacao: data.USDBRL.pctChange,
        }
        console.log(data)
        console.log(dados)
        setDados(dados)
      })
  }, []);

  return (
    <>
      {
        dados ?
          <View style={styles.container}>
            <Text style={styles.title}>{dados.nome}</Text>
            <Text>venda: {dados.venda}</Text>
            <Text>compra: {dados.compra}</Text>
            <Text>maxima: {dados.maxima}</Text>
            <Text>minima: {dados.minima}</Text>
            <Text>variacao: {dados.variacao}</Text>
          </View> :
          <View>
            <Text>sem dados</Text>
          </View>
      }

      <List />
    </>
  );
}

