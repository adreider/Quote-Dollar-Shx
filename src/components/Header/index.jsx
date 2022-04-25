import React, { useState } from 'react';
import DatePicker from '../DatePicker'
import { Container, Header, Title } from './styles';

export function PrimaryHeader() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  
  const image = { uri: "https://www.crushpixel.com/big-static18/preview4/cash-hundreddollar-bills-banknotes-scattered-2831895.jpg"}

  return (
    <Container>
      <Header source={image}>
        <Title>Cotação do Dóllar💲</Title>
      </Header>
      <DatePicker />
    </Container>

  );
}