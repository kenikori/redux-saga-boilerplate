import {
  extendTheme,
  StyleFunctionProps,
  ThemeOverride,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import { cardTheme } from "./cardTheme";

const light = "#CAD2C5";
const dark = "#2F3E46";

const config: ThemeOverride = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode(light, dark)(props),
      },
    }),
  },
  components: {
    Card: cardTheme,
  },
  semanticTokens: {
    colors: {
      body: {
        default: "orange.800",
        _dark: "orange.100",
      },
      text: {
        default: "gray.900",
        _dark: "gray.50",
      },
      boxElementTitle: {
        default: "#2F3E46",
        _dark: "#CAD2C5",
      },
      card: {
        default: "red",
        _dark: "red",
      },
    },
  },
};

const theme = extendTheme(config);

export default theme;
