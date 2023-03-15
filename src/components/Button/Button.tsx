import { Button as ChackraButton, ButtonProps } from "@chakra-ui/react";
import React from "react";

export const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return <ChackraButton {...props}>{children}</ChackraButton>;
};
