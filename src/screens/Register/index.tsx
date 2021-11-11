import React from "react";
import { Input } from "../../components/Form/Input"
import {
  Container,
  Title,
  Header,
  Form
} from "./styles";
export function Register() {
  return (
    <Container>
      <Header>
        <Title>Contato</Title>
      </Header>

      <Form>

      <Input
        placeholder="Nome1"
        />

      <Input
        placeholder="Preço"
        />
        </Form>
    </Container>
  )
}