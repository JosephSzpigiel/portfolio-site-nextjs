import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Home0 = () => {
  return (
    <Box 
        border='2px solid blue' 
        // textAlign={'center'}
        // fontSize={'clamp(12px, 2vw, 40px)'}
    >
        <Text 
            fontSize={'clamp(30px, 2vw, 50px)'}
            fontWeight={'600'}
        >
            Joseph Szpigiel
        </Text>
        <Text
            fontSize={'clamp(20px, 1vw, 30px)'}
            fontWeight={'500'}
        >
            Software Engineer
        </Text>
        <Text>
            I build pixel-perfect, engaging, and accessible digital experiences.
        </Text>
    </Box>
  )
}

export default Home0