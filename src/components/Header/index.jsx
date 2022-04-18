import { StyleSheet} from 'react-native';
import { Container, Header, Title } from './styles';

export function PrimaryHeader() {
  
  const image = { uri: "https://www.crushpixel.com/big-static18/preview4/cash-hundreddollar-bills-banknotes-scattered-2831895.jpg"}

  return (
    <Container>
      <Header source={image}>
        <Title>Cotação do Dóllar💲</Title>
      </Header>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});