import {Box, Stack, StackProps, Text, useColorModeValue as mode} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import * as React from 'react'

export interface FeatureProps {
  title: string
  children: React.ReactNode
  icon: React.ReactElement
}

const MotionStack = motion<StackProps>(Stack)

export const Feature = (props: FeatureProps) => {
  const {title, children, icon} = props
  return (
    <MotionStack
      spacing={{base: '3', md: '6'}}
      direction={{base: 'column', md: 'row'}}
      whileInView={{y: [40, 0], opacity: [0, 1]}}
    >
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="black" fontSize="lg" whiteSpace="break-spaces">
          {title}
        </Text>
        <Box color={mode('gray.600', 'gray.400')} whiteSpace="break-spaces">{children}</Box>
      </Stack>
    </MotionStack>
  )
}
