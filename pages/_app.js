import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AniListTheme } from "../styles/theme";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={AniListTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
