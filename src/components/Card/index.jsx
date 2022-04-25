import React, { useState, useEffect } from 'react';
import moment from 'moment';
import numbro from 'numbro';
import AppLoading from 'expo-app-loading';
import { Container, ContentText, Strong, StrongValue, Title, SubTitle, Divider, Box } from './styles';

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
          data: data.USDBRL.timestamp,
        }
        setDados(dados)
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
              <StrongValue>💲{(dados.venda).toLocaleString('pt-BR').replace(".", ",")}</StrongValue>
            </ContentText>

            <ContentText>
              <Strong>compra:</Strong>
              <StrongValue>💲{(dados.compra).toLocaleString('pt-BR').replace(".", ",")}</StrongValue>
            </ContentText>

            <ContentText>
              <Strong>máxima:</Strong>
              <StrongValue>💲{(dados.maxima).toLocaleString('pt-BR').replace(".", ",")}</StrongValue>
            </ContentText>

            <ContentText>
              <Strong>mínima:</Strong>
              <StrongValue>💲{(dados.minima).toLocaleString('pt-BR').replace(".", ",")}</StrongValue>
            </ContentText>

            <ContentText>
              <Strong>variação:</Strong>
              <StrongValue>📉 {(dados.variacao).toLocaleString('pt-BR').replace(".", ",")}</StrongValue>
            </ContentText>

            <ContentText>
              <Strong>Período:</Strong>
              {/* <StrongValue>📅 {moment(parseInt(dados.data) * 1000).format("DD/MM/YYYY")}</StrongValue> */}
              <StrongValue>ùltima contagem</StrongValue>
            </ContentText>
            <Divider />

            <Box>
              <SubTitle>Cotações das últimas semanas</SubTitle>
            </Box>

          </Container>
          :
          <AppLoading />
      }
    </>
  );
}

