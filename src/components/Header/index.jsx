import { View, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { styles } from './styles';

export function PrimaryHeader() {
 
  return (
    <>
      <View style={{ marginTop: getStatusBarHeight() }}>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
          <Text style={styles.title}>Cotação Dollar 💲</Text>
        </View>
      </View>
      </View>
    </>
  );
}