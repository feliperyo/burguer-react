import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Image, Body, Container, LiOrder, OrderClientName } from "./styles";

import Sacola from "../../assets/sacola.png";
import Trash from "../../assets/trash.png";
import Title from "../../components/Title";
import NewButton from "../../components/Button";

function Order() {
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      const { data: createdOrders } = await axios.get(
        "http://localhost:3001/order"
      );
      setOrder(createdOrders);
    }

    fetchOrders();
  }, []);

  async function deleteUser(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`);
    const newOrders = order.filter((order) => order.id !== orderId);
    setOrder(newOrders);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Body>
      <header>
        <Image src={Sacola} alt="logo" />
        <Title>Pedidos</Title>
      </header>
      <Container>
        <ul>
          {order.map((order) => (
            <LiOrder key={order.id}>
              <OrderClientName>
                <h2>{order.order}</h2> <h3>{order.clientName}</h3>
              </OrderClientName>
              <button onClick={() => deleteUser(order.id)}>
                <img src={Trash} alt="deletar" />
              </button>
            </LiOrder>
          ))}
        </ul>
        <NewButton isBack={true} onClick={goBackPage}>
          Voltar
        </NewButton>
      </Container>
    </Body>
  );
}

export default Order;
