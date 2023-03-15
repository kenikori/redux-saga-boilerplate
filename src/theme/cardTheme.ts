import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: "#C0C7BC",
    borderRadius: 10,
    borderWidth: 1,
    _dark: {
      backgroundColor: "#354F52",
      borderRadius: 10,
    },
  },
  header: {
    paddingBottom: "4px",
    color: "#2F3E46",
    _dark: {
      color: "#CAD2C5",
    },
  },
  footer: {
    paddingTop: "2px",
  },
});

export const cardTheme = defineMultiStyleConfig({ baseStyle });
