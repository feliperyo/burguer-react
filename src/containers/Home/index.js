import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Image, H1, Paragraph, Input, Body, Container, Button } from "./styles";

import Logo from "../../assets/logo-home.png";

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
        <H1>Faça Seu Pedido!</H1>
      </header>
      <Container>
        <Paragraph>Seu Pedido</Paragraph>
        <Input ref={inputOrder} placeholder="Pedido"></Input>

        <Paragraph>Seu Nome</Paragraph>
        <Input ref={inputName} placeholder="Nome"></Input>

        <Button onClick={addNewOrder}>Enviar Pedido</Button>
      </Container>
    </Body>
  );
}

export default App;
