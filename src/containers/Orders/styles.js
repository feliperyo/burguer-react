import styled from "styled-components";

export const Body = styled.div`
  background: #0a0a10;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 300px;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 342px;
`;

export const OrderClientName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LiOrder = styled.li`
  width: 100%;
  min-height: 100px;
  padding: 19px 15px 18px 15px;
  border-radius: 14px;
  background: #ffffff40;
  margin-bottom: 42px;
  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: left;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0px;
    text-align: left;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
