import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AniListTheme } from "../styles/theme";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={AniListTheme}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ChakraProvider>
    </SessionProvider>
  );
}
