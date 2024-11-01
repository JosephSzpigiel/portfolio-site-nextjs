import { Text, Link, Stack, Image, Card, CardBody, Heading, CardFooter, ButtonGroup, Button, HStack, Badge, Divider, Center, Box } from '@chakra-ui/react'
import React from 'react'

function Projects() {

    type Project = {
        link?: string;
        description: string | undefined; 
        image: string | undefined; 
        name: string | undefined;
        github: string | undefined;
        tech?: string[];
    }

    const projectDescriptions: Project[] = [
        {
            link: 'https://virtualpoker-josephszpigiels-projects.vercel.app/',
            description: 'Make a bet and deal yourself in! This project utilizes the Deck of Cards API to mimic a real deck of cards and follows the rules of Virtual Poker.',
            image: 'images/VPoker.png',
            name: 'Virtual Poker',
            github: 'https://github.com/JosephSzpigiel/vpoker-react',
            tech: ['Javascript', 'React', 'Next.js']
        },
        {
            description: 'Find a cocktail and relax with this project! Built in Vanilla Javascript and utilizing the CocktailDB API, you can find a drink recipe by name or ingredient and when run locally, save your favorites to a JSON server.',
            image: 'images/DrinkFinder.png',
            name: 'Drink Finder',
            github: 'https://github.com/JosephSzpigiel/drink-finder',
            tech: ['Javascript', 'HTML', 'CSS', 'API'],
            link: 'https://josephszpigiel.github.io/drink-finder/'
        },
        {
            description: 'Manage your Dungeons and Dragons games with this CLI! This project was built in Python utilizing a SQLite3 database. Try using the input "dm" with passcode "secret" to enter the hidden DM mode!',
            image: 'images/DnD.png',
            name: 'DnD Character Creator CLI',
            github: 'https://github.com/peymere/dnd-campaign-manager-cli-app',
            tech: ['Python', 'SQLite3', 'ORM', 'CLI']
        },
        {
            description: 'Welcome to DateCrafters, a dating concierge app that helps couples plan dates through a variety of activities that appeal to every mood and budget. It is a full-stack project built with a React frontend and a Python/Flask backend.',
            image: 'images/VPoker.png',
            name: 'DateCrafters',
            tech: ['Python', 'SQLite3', 'Flask', 'React', 'Semantic UI'],
            github: 'https://github.com/JosephSzpigiel/date-app'
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
            name: 'Test 3',
            github: 'https://github.com/JosephSzpigiel/vpoker-react'
        }
    ]


    function ProjectCard(project: Project){
        
        let techBadges = null
        
        
        if(project.tech){
            techBadges = project.tech.map(tech => <Badge key={tech} colorScheme='green'>{tech}</Badge>)
        }

        return(
            <Card maxW='sm' h={'lg'} background={'#57647A'} textColor={'white'} key={project.name}>
                <CardBody>
                    <Image src={project.image} alt={project.name} borderRadius={'lg'} w={'500px'} h={'175px'}/>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{project.name}</Heading>
                        <Text>
                            {project.description}
                        </Text>
                        <Stack direction={'row'} wrap={'wrap'}>
                            {techBadges}
                        </Stack>
                    </Stack>
                </CardBody>
                <Divider/>
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
        <Box
            id='projects'
            paddingTop={'50px'}
        >
            <Text
                fontSize={'24px'}
                fontWeight={'500'}
                paddingBottom={'10px'}
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
            <Center paddingTop={'10px'}>
                <Link>
                    <Button>See all projects</Button>
                </Link>
            </Center>
        </Box>
    )
}

export default Projects