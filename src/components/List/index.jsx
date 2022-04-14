import { View, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Card } from '../Card';
import { styles } from './styles';

export function List() {
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 20
    }}>
      <ScrollView>
        <Card />
      </ScrollView>
    </SafeAreaView>
  )
}