import "@/styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../styles/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box display={'flex'} justifyContent={'center'}>
        <Box paddingX={'10px'} paddingY={'6px'} maxW={'700px'} minW={'80%'}>
          <Component {...pageProps}/>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
