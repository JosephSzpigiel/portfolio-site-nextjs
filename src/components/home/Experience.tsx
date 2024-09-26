import React from 'react'
import { Box, Link, Text, Badge, Stack } from '@chakra-ui/react'

const Experience = () => {
  return (
    <Box
        paddingBottom={'50px'}
    >
        <Text
            fontSize={'24px'}
            fontWeight={'500'}
        >
            Experience
        </Text>
        <Box
            // border={"2px solid red"}
            display={'flex'}
            flexDirection={['column', 'row', 'row']}
        >
            <Box
                // border={"2px solid purple"}
                width={'30%'}
            >
                2024 — Present
            </Box>
            <Box
                // border={"2px solid yellow"}
                width={['100%', '70%']}
            >
                <Link 
                    href='https://www.klaviyo.com/' 
                    isExternal
                    fontSize={'24px'}
                    fontWeight={'500'}
                >
                    Senior Frontend Engineer, Accessibility · Klaviyo
                </Link>
                <Text>
                    Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.
                </Text>
                <Stack direction={'row'}>
                    <Badge colorScheme='green'>Javascript</Badge>
                    <Badge colorScheme='green'>Typescript</Badge>
                    <Badge colorScheme='green'>React</Badge>
                </Stack>
            </Box>
        </Box>
        <Box
        // border={"2px solid red"}
        display={'flex'}
        flexDirection={['column', 'row', 'row']}
        >
            <Box
                // border={"2px solid purple"}
                width={'30%'}
            >
                2018 — 2024
            </Box>
            <Box
                // border={"2px solid yellow"}
                width={['100%', '70%']}
            >
                <Link 
                    href='https://upstatement.com/' 
                    isExternal
                    fontSize={'24px'}
                    fontWeight={'500'}
                    >
                    Lead Engineer · Upstatement
                </Link>
                <Text>
                    Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.
                </Text>
                <Stack direction={'row'} wrap={'wrap'}>
                    <Badge colorScheme='green'>Javascript</Badge>
                    <Badge colorScheme='green'>Typescript</Badge>
                    <Badge colorScheme='green'>React</Badge>
                    <Badge colorScheme='green'>CSS</Badge>
                    <Badge colorScheme='green'>HTML</Badge>
                    <Badge colorScheme='green'>JSX</Badge>
                    <Badge colorScheme='green'>Next.js</Badge>
                    <Badge colorScheme='green'>Chakra UI</Badge>
                </Stack>
            </Box>
        </Box>
    </Box>
    
  )
}

export default Experience