import { Text as ChackraText, TextProps } from "@chakra-ui/react";
import React from "react";

export const Text: React.FC<
  TextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }) => {
  return <ChackraText {...props}>{children}</ChackraText>;
};
