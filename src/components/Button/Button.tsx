import { Button as ChackraButton, ButtonProps } from "@chakra-ui/react";
import React from "react";

export const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
  // eslint-disable-next-line react/function-component-definition
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ChackraButton {...props}>{children}</ChackraButton>;
};
