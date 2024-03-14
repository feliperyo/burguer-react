import React from "react";
import { Button } from "./styles";

function NewButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

export default NewButton;
