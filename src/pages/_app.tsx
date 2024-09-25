import NavBar from "@/components/navbar/NavBar";
import "@/styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box display={'flex'} justifyContent={'center'}>
        <Box paddingX={'10px'} paddingY={'6px'} maxW={'700px'}>
          <NavBar/>
          <Component {...pageProps}/>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
