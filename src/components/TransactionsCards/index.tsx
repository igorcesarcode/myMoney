import React from 'react';

import {

  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styled'

interface Category {
  name: string;
  icon: string;
}
interface Props {
  title: string;
  amount: string;
  category:Category;
  date: string;

}

export function TransactionsCards({
  title,
  amount,
  category,
  date
} : Props) {
  return (
    <Container>

    <Title>Desenvovimento de Site</Title>
    <Amount>R$ 10,000.00</Amount>
    <Footer>
      <Category>
        <Icon name="dollar-sign"/>
        <CategoryName>Vendas</CategoryName>
      </Category>
      <Date>2021-01-22</Date>
    </Footer>
      
    </Container>
  )
}