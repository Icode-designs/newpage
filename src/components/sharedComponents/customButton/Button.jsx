import React, { Children } from "react";
import { ButtonBox } from "./buttonStyles";
import { css } from "styled-components";

function Button({ children, variant, ...props }) {
  return (
    <ButtonBox $color={variant} {...props}>
      {children}
    </ButtonBox>
  );
}

export default Button;
