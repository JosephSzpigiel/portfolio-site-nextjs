import { Text, Link, Stack, Image, Card, CardBody, Heading, CardFooter, ButtonGroup, Button, HStack } from '@chakra-ui/react'
import React from 'react'

function Projects() {

    type Project = {
        link: string | undefined;
        description: string | undefined; 
        image: string | undefined; 
        name: string | undefined;
        github: string | undefined;
    }

    const projectDescriptions: Project[] = [
        {
            link: 'https://virtualpoker-8bfvmdsrw-josephszpigiels-projects.vercel.app/',
            description: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
            image: 'images/VPoker.png',
            name: 'Test',
            github: 'https://github.com/JosephSzpigiel/vpoker-react'
        },
        {
            link: 'https://virtualpoker-8bfvmdsrw-josephszpigiels-projects.vercel.app/',
            description: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
            image: 'images/VPoker.png',
            name: 'Test 2',
            github: 'https://github.com/JosephSzpigiel/vpoker-react'
        },
        {
            link: 'https://virtualpoker-8bfvmdsrw-josephszpigiels-projects.vercel.app/',
            description: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
            image: 'images/VPoker.png',
            name: 'Test 2',
            github: 'https://github.com/JosephSzpigiel/vpoker-react'
        },
        {
            link: 'https://virtualpoker-8bfvmdsrw-josephszpigiels-projects.vercel.app/',
            description: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
            image: 'images/VPoker.png',
            name: 'Test 2',
            github: 'https://github.com/JosephSzpigiel/vpoker-react'
        },
        {
            link: 'https://virtualpoker-8bfvmdsrw-josephszpigiels-projects.vercel.app/',
            description: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
            image: 'images/VPoker.png',
            name: 'Test 2',
            github: 'https://github.com/JosephSzpigiel/vpoker-react'
        },
        {
            link: 'https://virtualpoker-8bfvmdsrw-josephszpigiels-projects.vercel.app/',
            description: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
            image: 'images/VPoker.png',
            name: 'Test 2',
            github: 'https://github.com/JosephSzpigiel/vpoker-react'
        }

    ]

    function ProjectCard(project: Project){
        return(
            <Card maxW='sm' background={'#57647A'} textColor={'white'}>
                <CardBody>
                    <Image src={project.image} alt={project.name} borderRadius={'lg'}/>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{project.name}</Heading>
                        <Text>
                            {project.description}
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    {project.link ? 
                        <Link href={project.link} isExternal>
                            <Button variant='solid' colorScheme='blue'>Visit</Button>
                        </Link> : null
                    }
                    <Link href={project.github} isExternal>
                        <Button variant='solid' colorScheme='blue'>GitHub</Button>
                    </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        )
    }

    const ProjectCards = projectDescriptions.map(project => ProjectCard(project))


    return (
        <>
            <Text
                fontSize={'24px'}
                fontWeight={'500'}
            >
                Projects
            </Text>
                <HStack
                    // border={"2px solid red"}
                    display={'flex'}
                    flexWrap={'wrap'}
                    justifyContent={'center'}
                >
                    {ProjectCards}
                </HStack>
        </>
    )
}

export default Projects