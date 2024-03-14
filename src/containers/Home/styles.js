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
  width: 342px;
  height: auto;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 342px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  margin-left: 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 58px;
  padding: 19px 139px 18px 15px;
  border-radius: 14px;
  background: #ffffff40;
  border: none;
  outline: none;
  margin-bottom: 42px;
  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
`;

export const Button = styled.button`
  width: 100%;
  height: 68px;
  background: #d93856;
  border: none;
  cursor: pointer;
  margin-top: 34px;
  border-radius: 14px;
  font-size: 17px;
  font-weight: 900;
  letter-spacing: 0px;

  &:hover {
    background: #ffa61f;
  }

  &:active {
    opacity: 0.7;
  }
`;
