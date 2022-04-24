import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "../styles/Theme";


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;