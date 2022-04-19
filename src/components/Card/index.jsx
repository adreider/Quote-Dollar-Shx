import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import moment from 'moment';
import AppLoading from 'expo-app-loading';
import { Container, ContentText, Strong, StrongValue, Title, Divider } from './styles';

export function Card() {

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
          período: data.USDBRL.timestamp,
        }
        setDados(dados)
        console.log(dados)
      })
  }, []);

  return (
    <>
      {
        dados ?
          <Container>
            <Title>{dados.nome}</Title>

            <ContentText>
              <Strong>Venda:</Strong>
              <StrongValue>{dados.venda}</StrongValue>
            </ContentText>
            <Divider/>

            <ContentText>
              <Strong>compra:</Strong>
              <StrongValue>{dados.compra}</StrongValue>
            </ContentText>
            <Divider/>

            <ContentText>
              <Strong>maxima:</Strong>
              <StrongValue>{dados.maxima}</StrongValue>
            </ContentText>
            <Divider/>

            <ContentText>
              <Strong>minima:</Strong>
              <StrongValue>{dados.minima}</StrongValue>
            </ContentText>
            <Divider/>

            <ContentText>
              <Strong>variacao:</Strong>
              <StrongValue>{dados.variacao}</StrongValue>
            </ContentText>
            <Divider/>

            <ContentText>
              <Strong>data:</Strong>
              <StrongValue>{moment(parseInt(dados.data)*1000).format("DD/MM/YYYY - HH:mm:ss")}</StrongValue>
            </ContentText>
            <Divider/>
           
          </Container> 
          
          :

          <AppLoading/>
      }
    </>
  );
}

