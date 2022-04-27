import React, { useState, useRef } from "react";
import {
  Text, View, KeyboardAvoidingView, TouchableWithoutFeedback,
  Platform, TouchableOpacity, SafeAreaView,
  FlatList, StyleSheet, ActivityIndicator, Keyboard
} from 'react-native';
import { SmallInput } from '../SmallInput';
import { styles } from './styles';
import { ContentText, StrongValue, Strong, Divider } from './styles';
import moment from "moment";

const Item = ({ ask, bid, high, low, timestamp }) => (
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
        compra:
      </Strong>
      <StrongValue>
        💲{(low).toLocaleString('pt-BR').replace(".", ",")}
      </StrongValue>
    </ContentText>

    <ContentText>
      <Strong>
        maxíma:
      </Strong>
      <StrongValue>
        💲{(high).toLocaleString('pt-BR').replace(".", ",")}
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

  const [dayStart, setDayStart] = useState('30');
  const [monthStart, setMonthStart] = useState('09');
  const [yearStart, setYearStart] = useState('2000');

  const [dayEnd, setDayEnd] = useState('');
  const [monthEnd, setMonthEnd] = useState('');
  const [yearEnd, setYearEnd] = useState('');

  const monthInput = useRef();

  async function handleSubmit() {
    Keyboard.dismiss();

    await fetch(`https://economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date=${yearStart}${monthStart}${dayStart}&end_date=${yearEnd}${monthEnd}${dayEnd}`)
      .then(response => response.json())
      .then(data => {
        setDados(data)
        console.log(data)
      })
  }

  const renderItem = ({ item }) => <Item ask={item.ask} bid={item.bid} high={item.high} low={item.low} timestamp={item.timestamp} />;

  return (
    <>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.form}>
            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { textAlign: 'center' }]}>
                  Data Específica
                </Text>

                <View style={styles.column}>
                  <SmallInput
                    maxLength={2}
                    value={dayEnd}
                    placeholder="Dia"
                    onChangeText={setDayEnd}
                    onSubmitEditing={() => {
                      monthInput.current.focus();
                    }}
                  />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput
                    maxLength={2}
                    value={monthEnd}
                    placeholder="Mês"
                    onChangeText={setMonthEnd}
                    ref={monthInput}
                    blurOnSubmit={false}
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

          {
            dados ?
              <SafeAreaView style={styled.container}>
                <FlatList data={dados} renderItem={renderItem} keyExtractor={item => item.varBid} />
              </SafeAreaView>
              :
              <ActivityIndicator
                size="large"
                color={'blue'}
                animating={true}
                style={{ alignSelf: 'center', justifyContent: 'center', position: "absolute" }}
              />
          }
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

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