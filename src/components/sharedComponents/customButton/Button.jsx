import React, { Children } from "react";
import { ButtonBox } from "./buttonStyles";

function Button({ children, ...props }) {
  return <ButtonBox {...props}>{children}</ButtonBox>;
}

export default Button;
