import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function About() {
  return (
    <Box paddingTop={'50px'} id={'about'}>
        <Text
            fontSize={'24px'}
            fontWeight={'500'}
        >
            About
        </Text>
        <Text>
          Programmer using Python with Flask and JavaScript with a background working in the nonprofit sector as part of a cross functional team implementing technical solutions. Known for communication and collaboration skills that help teams succeed. Trained 200+ non-technical staff on a proprietary CRM used to track program participation for 1000+ participants across the US and Canada. Demonstrates a passion for creative problem solving to manage complex business needs.
        </Text>
    </Box>
  )
}

export default About