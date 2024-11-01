import React from 'react'
import { Box, Link, Text, Badge, Stack } from '@chakra-ui/react'

const Experience = () => {
  return (
    <Box
        paddingTop={'50px'}
        id={'experience'}
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
                    href='https://wevote.us/' 
                    isExternal
                    fontSize={'24px'}
                    fontWeight={'500'}
                >
                    Software Engineer, Volunteer · WeVote
                </Link>
                <Text>
                    Fix identified bugs and implement new features in React.js and Django Python. Write tests to verify the functionality of the WeVote platform. Report new bugs and record them using the Jira platform.
                </Text>
                <Stack direction={'row'} paddingY={'10px'}>
                    <Badge colorScheme='green'>Javascript</Badge>
                    <Badge colorScheme='green'>React</Badge>
                    <Badge colorScheme='green'>Python</Badge>
                    <Badge colorScheme='green'>Django</Badge>
                    <Badge colorScheme='green'>Jira</Badge>
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
                2021 — 2024
            </Box>
            <Box
                // border={"2px solid yellow"}
                width={['100%', '70%']}
            >
                <Link 
                    href='https://www.yachad.org/' 
                    isExternal
                    fontSize={'24px'}
                    fontWeight={'500'}
                    >
                    Director of Data and Systems · Yachad
                </Link>
                <Text>
                    Coordinated business needs with our webteam to enhance a custom CRM frontend. Oversaw business use of technological needs for 10+ chapters across 3 countries. Bugtested new features for data management systems. Trained and supported 200+ users in use of a custom CRM tracking 1000+ program participants and volunteers.
                </Text>
                <Stack direction={'row'} wrap={'wrap'} paddingY={'10px'}>
                    <Badge colorScheme='green'>Sharepoint</Badge>
                    <Badge colorScheme='green'>WordPress</Badge>
                    <Badge colorScheme='green'>Custon CRM Management</Badge>
                    <Badge colorScheme='green'>Bugtesting</Badge>
                    <Badge colorScheme='green'>Training</Badge>
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
                2020 — 2021
            </Box>
            <Box
                // border={"2px solid yellow"}
                width={['100%', '70%']}
            >
                <Link 
                    href='https://wevote.us/' 
                    isExternal
                    fontSize={'24px'}
                    fontWeight={'500'}
                >
                    Assistant Director of Operations · Yachad
                </Link>
                <Text>
                    Liaised with our IT department to update existing technology processes. Coordinated the department wide transition of user data from a local storage drive to Microsoft Sharepoint. Developed annual reports looking at organizational impact on 1000+ participants. Managed access and permissions for organizations technological needs.
                </Text>
                <Stack direction={'row'} paddingY={'10px'}>
                    <Badge colorScheme='green'>Sharepoint</Badge>
                    <Badge colorScheme='green'>Data Analysis</Badge>
                    <Badge colorScheme='green'>Management</Badge>
                </Stack>
            </Box>
        </Box>
    </Box>
    
  )
}

export default Experience