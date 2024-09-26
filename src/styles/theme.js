import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: '#0f182a',
        color: 'white', 
      },
    },
  },
});

export default theme;