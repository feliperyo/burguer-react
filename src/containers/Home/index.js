import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Image, Paragraph, Input, Body, Container } from "./styles";

import Logo from "../../assets/logo-home.png";
import Title from "../../components/Title";
import NewButton from "../../components/Button";

function App() {
  const [order, setOrder] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();
  const navigate = useNavigate();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      order: inputOrder.current.value,
      clientName: inputName.current.value,
    });
    setOrder([newOrder, ...order]);

    navigate("./orders");
  }

  return (
    <Body>
      <header>
        <Image src={Logo} alt="logo" />
        <Title>Faça Seu Pedido!</Title>
      </header>
      <Container>
        <Paragraph>Seu Pedido</Paragraph>
        <Input ref={inputOrder} placeholder="Pedido"></Input>

        <Paragraph>Seu Nome</Paragraph>
        <Input ref={inputName} placeholder="Nome"></Input>

        <NewButton onClick={addNewOrder}>Enviar Pedido</NewButton>
      </Container>
    </Body>
  );
}

export default App;
