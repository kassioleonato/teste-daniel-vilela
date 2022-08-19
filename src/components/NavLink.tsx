import {
  Box,
  chakra,
  Flex,
  HTMLChakraProps,
  Icon,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import content from '../../content'

interface DesktopNavLinkProps extends HTMLChakraProps<'a'> {
  active?: boolean
}

const DesktopNavLink = (props: DesktopNavLinkProps) => {
  const { active, ...rest } = props
  return (
    <chakra.a
      href="#"
      aria-current={active ? 'page' : undefined}
      fontWeight="semibold"
      color="whiteAlpha.800"
      {...rest}
      _activeLink={{
        color: mode(content.colors.primaryDark, content.colors.primary),
        fontWeight: 'bold',
      }}
    />
  )
}

interface MobileNavLinkProps {
  icon: React.ElementType
  children: React.ReactNode
  href?: string
}

const MobileNavLink = (props: MobileNavLinkProps) => {
  const { icon, children, href } = props
  return (
    <Flex
      as="a"
      href={href}
      m="-3"
      p="3"
      align="center"
      rounded="md"
      cursor="pointer"
      _hover={{ bg: mode('gray.50', 'gray.600') }}
    >
      <Icon as={icon} color={mode(content.colors.primaryDark, content.colors.primary)} fontSize="xl" />
      <Box marginStart="3" fontWeight="medium">
        {children}
      </Box>
    </Flex>
  )
}

export const NavLink = {
  Desktop: DesktopNavLink,
  Mobile: MobileNavLink,
}
