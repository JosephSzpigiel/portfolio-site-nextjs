import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubButton from '../buttons/GitHubButton'
import LinkedInButton from '../buttons/LinkedInButton'

const Hero = () => {
  return (
    <Box 
        paddingTop={'20px'}
        // border='2px solid blue' 
        // textAlign={'center'}
        // fontSize={'clamp(12px, 2vw, 40px)'}
    >
        <Text 
            fontSize={'clamp(50px, 2vw, 70px)'}
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
        <HStack paddingTop={'5px'}>
            <GitHubButton/>
            <LinkedInButton/>
        </HStack>
    </Box>
  )
}

export default Hero