import React from 'react'
import { Box, HStack, Link } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Box>
        <HStack>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/resume'>Resume</Link>
        </HStack>
    </Box>
  )
}

export default NavBar