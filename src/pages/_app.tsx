import NavBar from "@/components/navbar/NavBar";
import "@/styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../styles/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box display={'flex'} justifyContent={'center'}>
        <Box paddingX={'10px'} paddingY={'6px'} maxW={'700px'} minWidth={'80%'}>
          <NavBar/>
          <Component {...pageProps}/>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
