import { Text as ChackraText, TextProps } from "@chakra-ui/react";
import React from "react";

export const Text: React.FC<
  TextProps & React.ButtonHTMLAttributes<HTMLButtonElement>
  // eslint-disable-next-line react/function-component-definition
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ChackraText {...props}>{children}</ChackraText>;
};
