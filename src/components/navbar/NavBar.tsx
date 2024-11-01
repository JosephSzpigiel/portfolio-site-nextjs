import {useEffect, useState} from 'react'
import { Box, Button, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from '@chakra-ui/react'
// import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';

const NavBar = () => {

  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newOpacity = Math.max(.4, 1 - scrollPosition / 200); // Change 200 to adjust the fade effect
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");


  return (
    <Box h={'40px'}
      as="header" 
      zIndex={100} 
      position="fixed" 
      flex={1}
      top={0}
      minWidth={'80%'}
      alignItems='center'
      justifyItems={'right'}
      gap='2' 
      height='60px'
    >
      {isSmallScreen? 
        null:(
        <HStack
          height='60px'
          alignItems='center'
          justifyContent={'right'}
          minWidth={'80%'}
        >
            <Link href='#home'>
              <Button opacity={opacity}>
                Home
              </Button>
            </Link>
            <Link href='#about'>
              <Button opacity={opacity}>
                About
              </Button>
            </Link>
            <Link href='#experience'>
              <Button opacity={opacity}>
                Experience
              </Button>
            </Link>
            <Link href='#projects'>
              <Button opacity={opacity}>
                Projects
              </Button>
            </Link>
            <Link href='/resume/Joseph_Szpigiel_Resume.pdf' isExternal>
              <Button opacity={opacity}>
                Resume
              </Button>
            </Link>
        </HStack>
      )
      }
    </Box>
  )
}

export default NavBar