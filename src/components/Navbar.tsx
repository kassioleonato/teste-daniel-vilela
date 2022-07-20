import {
  Box,
  BoxProps,
  Button,
  Flex,
  HStack,
  Img,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import useScrollPosition from 'hooks/useScrollPosition'
import * as React from 'react'
import {cta} from 'utils/cta'
import content from '../../content'
import {MobileNav} from './MobileNav'
import {NavLink} from './NavLink'

const MotionBox = motion<BoxProps>(Box)

export const Navbar = () => {
  const hasTestimonial = content.testimonials ? content.testimonials.length > 0 : false
  const scrollPosition = useScrollPosition()
  const [isLargerThan768] = useMediaQuery('(min-height: 767px)')
  const [isSmallerThan810] = useMediaQuery('(max-height: 810px)')

  return (
    <MotionBox
      whileInView={{y: [-40, 0]}}
      // @ts-ignore
      transition={{duration: 0.3}}
      position="fixed"
      zIndex={2}
      left="0"
      right="0"
      background="transparent"
      opacity={scrollPosition < 80 ? 1 : 0}
    >
      <Box as="header">
        <Box maxW="6xl" mx="auto"  px={{base: '6', md: '8'}} mt={isLargerThan768 && isSmallerThan810 ? '4.4rem' : ''}>
        <Flex as="nav" justify={useBreakpointValue({ base: "center", md: "space-between" })}>
              <Box as="a" href="#" rel="home" ml={{xl:'3rem', '2xl':'0'}}>
                <Img src={"./logo.png"} alt="Envelope app logo" w={270}/>
              </Box>
            <HStack spacing="8">
              <HStack display={{base: 'none', lg: 'flex'}} spacing="8">
                <NavLink.Desktop href='#about'>Sobre</NavLink.Desktop>
                <NavLink.Desktop href="#services">Informações</NavLink.Desktop>
                <NavLink.Desktop href="#faq">FAQ</NavLink.Desktop>
                { hasTestimonial && <NavLink.Desktop href="#testimonials">Depoimentos</NavLink.Desktop> }
                <NavLink.Desktop href="#contact">Contato</NavLink.Desktop>
              </HStack>
            </HStack>
            <Flex align="center">
              <HStack spacing="8" display={{base: 'none', md: 'flex'}}>
                <Button colorScheme={content.colors.scheme} rounded="full" onClick={cta}>
                  Marcar consulta
                </Button>
              </HStack>
              <Box ml="5">
                <MobileNav/>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </MotionBox>
  )
}
