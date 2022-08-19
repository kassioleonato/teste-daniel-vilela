import { Box, BoxProps, Button, Container, Heading, Img, Stack, StackProps, Text, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const MotionBox = motion<BoxProps>(Box)
const MotionStack = motion<StackProps>(Stack)

export const Partner = () => (
  <MotionBox
    as="section"
    bg="teal.400"
    id="contact"
  >
    <Container py={{ base: '16', md: '24' }}>
      <MotionStack whileInView={{ translateX: [50, 0], opacity: [0, 1] }} spacing={{ base: '8', md: '10' }}>
        <Stack spacing={{ base: '4', md: '5' }} align="center">
          <Heading color="white" size={useBreakpointValue({ base: 'lg', md: 'xl' })}>Uma clínica parceira </Heading>
          <Img src="https://assets.testfy.com.br/static/img/tfylogo_white.svg" style={{ transform: 'scale(0.64)' }} />
          <Text color="white" maxW="2xl" textAlign="center" fontSize="md">
            A <i>testfy</i> é um <i>one stop shop</i> de autocuidado, longevidade, saúde e educação continuada que integra ciência e tecnologia.

            <br />
            <br />

            Atualmente a <i>testfy</i> disponibiliza exames nutrigenético, genéticos dermatológico, ginecológico e esportivo, hipersensibilidade alimentar, microbioma intestinal e muitos outros.
          </Text>
        </Stack>
        <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">
          <Button
            as="a"
            variant="solid"
            size="lg"
            rounded="full"
            colorScheme="teal"
            rightIcon={<FiArrowUpRight />}
            href="https://testfy.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conhecer as análises
          </Button>
        </Stack>
      </MotionStack>
    </Container>
  </MotionBox>
)