import React from 'react'
import { Link, IconButton } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

function GitHubButton() {
  return (
    <Link href='https://github.com/JosephSzpigiel' isExternal>
        <IconButton aria-label='GitHub' icon={<FaGithub />} variant={'ghost'} color={'grey'} fontSize={'30px'}/>
    </Link>
  )
}

export default GitHubButton