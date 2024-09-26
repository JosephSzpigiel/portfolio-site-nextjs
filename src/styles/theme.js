import { background, Card, extendTheme } from '@chakra-ui/react';
import { color } from 'framer-motion';

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