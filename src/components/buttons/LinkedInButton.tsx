import React from 'react'
import { Link, IconButton } from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'

function LinkedInButton() {
  return (
    <Link href='https://www.linkedin.com/in/joseph-szpigiel/' isExternal>
        <IconButton 
          aria-label='LinkedIn' 
          icon={<FaLinkedin />} 
          variant={'ghost'} 
          color={'grey'} 
          fontSize={'50px'} 
          height={'50px'}/>
    </Link>
  )
}

export default LinkedInButton