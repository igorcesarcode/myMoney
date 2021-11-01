import React from 'react';
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransition

} from './styles';

interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransition: string;
}

const icon = {
  up: 'arrow-with-circle-up',
  down: 'arrow-with-circle-down',
  total: 'credit',
}

export function HighlightCard({type, title, amount, lastTransition} : Props) {
  return (
  <Container type={type}>

    <Header>
      <Title type={type}>{title}</Title>
      <Icon name={icon[type]} type={type}/>
      </Header>

      <Footer>
        <Amount type={type}>
          R$ {amount}
        </Amount>
        <LastTransition type={type}>
          {lastTransition}
        </LastTransition>
      </Footer>
  </Container>

)
};