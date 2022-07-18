import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { Feature } from './Feature'
import content from '../../content'

export const Features = () => {
  const { features } = content

  return (
  <Box as="section" maxW="5xl" mx="auto" py="140" px={{ base: '6', md: '8' }} mt={4} id="services">
    <Heading mb={24} textAlign="center" size="xl" color={content.colors.primary}>{features.title}</Heading>

    <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
      {features.items.map((item, index) => (
        <Feature title={item.title} icon={<item.icon color={content.colors.primary} />} key={`feat-${index}`}>
          {item.content}
        </Feature>
      ))}
    </SimpleGrid>
  </Box>
)}