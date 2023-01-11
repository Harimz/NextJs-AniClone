import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import { AniListTheme } from "../styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <ColorModeScript
          initialColorMode={AniListTheme.config.initialColorMode}
        />

        <NextScript />
      </body>
    </Html>
  );
}
