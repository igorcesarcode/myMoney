import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionsCards } from '../../components/TransactionsCards';
import {
  Container,
  Header,
  Photo,
  UserWapper,
  UserInfo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title
} from './styles'


export function Dashboard() {

  const data = [
    {

    }
  ];



  return (
    <Container >
      <Header>
        <UserWapper>

          <UserInfo>
            <UserInfo />
            <Photo source={{ uri: 'https://github.com/igorcesarcode.png' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Igor</UserName>
            </User>

          </UserInfo>
          <Icon name="power" />
        </UserWapper>

      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="1000,00"
          lastTransition="Ultima entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="12300,00"
          lastTransition="Ultima saída dia 03 de abril"
        />

        <HighlightCard
          type="total"
          title="Entradas"
          amount="300.000,00"
          lastTransition="01 há 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagens</Title>
        <TransactionsCards />
        <TransactionsCards />
        <TransactionsCards />
      </Transactions>


    </Container>
  )
}
