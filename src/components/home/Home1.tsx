import React from 'react'
import { Box } from '@chakra-ui/react'

const Home1 = () => {
  return (
    <Box
        border={"2px solid red"}
        display={'flex'}
        flexDirection={['column', 'row', 'row']}
    >
        <Box
            border={"2px solid purple"}
            width={'30%'}
        >
            Left Box
        </Box>
        <Box
            border={"2px solid yellow"}
            width={['100%', '70%']}
        >
            Right Box
        </Box>
    </Box>
  )
}

export default Home1