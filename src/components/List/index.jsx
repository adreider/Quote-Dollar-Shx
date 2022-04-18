import moment from "moment";
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { ContentText, StrongValue, Strong, Divider } from './styles';

const Item = ({ ask, bid, timestamp }) => (
  <View style={styles.item}>
    <ContentText>
      <Strong>
        venda:
      </Strong>
      <StrongValue>
        {bid}
      </StrongValue>
    </ContentText>
    <Divider />

    <ContentText>
      <Strong>
        compra:
      </Strong>
      <StrongValue>
        {ask}
      </StrongValue>
    </ContentText>
    <Divider />

    <ContentText>
      <Strong>
        data:
      </Strong>
      <StrongValue>
        {moment(parseInt(timestamp)).locale('pt-br').format("DD/MM - HH:mm")}
      </StrongValue>
    </ContentText>
    <Divider />

  </View>
);

export function List() {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(`https://economia.awesomeapi.com.br/json/daily/USD-BRL/15`)
      .then(response => response.json())
      .then(data => {
        setDados(data)
        console.log(data)
      })
  }, []);


  const renderItem = ({ item }) => <Item ask={item.ask} bid={item.bid} timestamp={item.timestamp} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={dados} renderItem={renderItem} keyExtractor={item => item.varBid} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#9400D3',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 16,
    borderRadius: 8
  },
});

