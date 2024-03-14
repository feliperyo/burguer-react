import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 68px;
  background: ${(props) => (props.isBack ? "#ffffff24;" : "#d93856")};
  border: none;
  cursor: pointer;
  margin-top: 34px;
  border-radius: 14px;
  font-size: 17px;
  font-weight: 900;
  letter-spacing: 0px;

  &:hover {
    background: ${(props) => (props.isBack ? "" : "#ffa61f")};
    opacity: ${(props) => (props.isBack ? "0.8" : "")};
  }

  &:active {
    opacity: 0.7;
  }
`;
