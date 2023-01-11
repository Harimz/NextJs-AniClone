import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Button } from "./components/index";
import * as foundations from "./foundations";

const styles = {
  global: (props) => ({
    body: {
      color: mode("lightText", "darkText")(props),
      bg: mode("#EDF1F5", "#0B1622")(props),
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  ...foundations,
  components: {
    Button,
  },
  styles,
  config,
});

export const AniListTheme = extendTheme(theme);
