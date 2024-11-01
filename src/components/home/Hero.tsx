import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubButton from '../buttons/GitHubButton'
import LinkedInButton from '../buttons/LinkedInButton'

const Hero = () => {
  return (
    <Box 
        paddingTop={'80px'}
        id='home'
        // border='2px solid blue' 
        // textAlign={'center'}
        // fontSize={'clamp(12px, 2vw, 40px)'}
    >
        <Text 
            fontSize={['60px', '60px', '70px', '90px']}
            fontWeight={'700'}
        >
            Joseph Szpigiel
        </Text>
        <Text
            fontSize={['40px', '40px', '50px', '60px']}
            fontWeight={'600'}
        >
            Software Engineer
        </Text>
        <Text fontWeight={'normal'} fontSize={['20px', '20px', '25px', '25px']}>
            <span style={{fontWeight: "semibold"}}>Languages:</span> Python, Javascript, Typescript, SQL
        </Text>
        <Text fontWeight={'normal'} fontSize={['20px', '20px', '25px', '25px']}>
            <span style={{fontWeight: "semibold"}}>FrameWorks & Libraries:</span> React.js, Next.js, Flask, Chakra UI
        </Text>
        <HStack>
        </HStack>
        <HStack paddingTop={'15px'}>
            <GitHubButton/>
            <LinkedInButton/>
        </HStack>
    </Box>
  )
}

export default Hero