import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";

const appTheme = extendTheme({}, theme);

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to documentation!</title>
      </Head>
      <main>
        <ChakraProvider theme={appTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}

export default CustomApp;
