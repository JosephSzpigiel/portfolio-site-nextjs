import { background, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: '#0f182a',
        color: 'white', // Replace 'yourColor' with your desired color
        // You can set other styles as needed
      },
    },
  },
});

export default theme;