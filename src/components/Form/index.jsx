import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView, Platform, TouchableOpacity, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { SmallInput } from '../SmallInput';
import { styles } from './styles';
import { ContentText, StrongValue, Strong, Divider } from './styles';
import AppLoading from 'expo-app-loading';
import moment from "moment";

const Item = ({ ask, bid, timestamp }) => (
  <View style={styles.item}>
    <ContentText>
      <Strong>
        venda:
      </Strong>
      <StrongValue>
        💲{(bid).toLocaleString('pt-BR').replace(".", ",")}
      </StrongValue>
    </ContentText>

    <ContentText>
      <Strong>
        compra:
      </Strong>
      <StrongValue>
        💲{(ask).toLocaleString('pt-BR').replace(".", ",")}
      </StrongValue>
    </ContentText>

    <ContentText>
      <Strong>
        período:
      </Strong>
      <StrongValue>
        📅 {moment(parseInt(timestamp) * 1000).format("DD/MM/YYYY")}
      </StrongValue>
    </ContentText>
    <Divider />

  </View>
);


export function Form() {
  const [dados, setDados] = useState([]);

  const [dayStart, setDayStart] = useState('');
  const [monthStart, setMonthStart] = useState('');
  const [yearStart, setYearStart] = useState('');

  const [dayEnd, setDayEnd] = useState('');
  const [monthEnd, setMonthEnd] = useState('');
  const [yearEnd, setYearEnd] = useState('');


  function handleSubmit() {
    fetch(`https://economia.awesomeapi.com.br/USD-BRL/10?start_date=${yearStart}${monthStart}${dayStart}&end_date=${yearEnd}${monthEnd}${dayEnd}`)
      .then(response => response.json())
      .then(data => {
        setDados(data)
        console.log(data)
      })
  }

  const renderItem = ({ item }) => <Item ask={item.ask} bid={item.bid} timestamp={item.timestamp} />;

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.form}>
          <View style={styles.field}>
            <View>
              <Text style={[styles.label, { textAlign: 'center' }]}>
                Data Inicial
              </Text>

              <View style={styles.column}>
                <SmallInput
                  maxLength={2}
                  value={dayStart}
                  placeholder="Dia"
                  onChangeText={setDayStart}
                />
                <Text style={styles.divider}>
                  /
                </Text>
                <SmallInput
                  maxLength={2}
                  value={monthStart}
                  placeholder="Mês"
                  onChangeText={setMonthStart}
                />
                <Text style={styles.divider}>
                  /
                </Text>
                <SmallInput
                  maxLength={4}
                  value={yearStart}
                  placeholder="Ano"
                  onChangeText={setYearStart}
                />
              </View>
            </View>

            <View>
              <Text style={[styles.label, { textAlign: 'center' }]}>
                Data final
              </Text>

              <View style={styles.column}>
                <SmallInput
                  maxLength={2}
                  value={dayEnd}
                  placeholder="Dia"
                  onChangeText={setDayEnd}
                />
                <Text style={styles.divider}>
                  /
                </Text>
                <SmallInput
                  maxLength={2}
                  value={monthEnd}
                  placeholder="Mês"
                  onChangeText={setMonthEnd}
                />
                <Text style={styles.divider}>
                  /
                </Text>
                <SmallInput
                  maxLength={4}
                  value={yearEnd}
                  placeholder="Ano"
                  onChangeText={setYearEnd}
                />
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.title}>Pesquisar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      {
        dados ?
          <SafeAreaView style={styled.container}>
            <FlatList data={dados} renderItem={renderItem} keyExtractor={item => item.varBid} />
          </SafeAreaView>

          :
          <AppLoading />
      }
    </>

  )
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 16,
    borderRadius: 8
  },
});