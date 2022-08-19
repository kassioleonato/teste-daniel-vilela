import { Box, BoxProps, Circle, Flex, HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'
import { Quotee } from './Quotee'
import { QuoteIcon } from './QuoteIcon'
import content from '../../content'

const MotionBox = motion<BoxProps>(Box)

export const Testimonial = () => {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0)

  const { testimonials } = content

  const testimonial = React.useMemo(() => {
    if (!testimonials) return undefined
    //automatically add one to the index to account for the quote icon
    const time = 5000
    setTimeout(() => {
      setTestimonialIndex((testimonialIndex + 1) % testimonials.length)
    }
      , time)
    return testimonials[testimonialIndex]

  }, [testimonialIndex, testimonials])



  return (
  <MotionBox as="section" whileInView={{ opacity: [0, 1], scale: [0.80, 1] }} id="testimonials" py="30">
    <Box maxW="3xl" mx="auto" px={{ base: '6', md: '8' }} pt="8" pb="12">
      <Flex direction="column" align="center" textAlign="center">
        <QuoteIcon
          color='gray.400'
          fontSize={{ base: '3xl', md: '6xl' }}
        />
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mt="6">
          &ldquo;{testimonial?.content}&rdquo;
        </Text>
        <Quotee
          name={testimonial?.clientName || ''}
          jobTitle={testimonial?.clientDescription || ''}
          mt="8"
        />
      </Flex>
      <HStack justify="center" spacing="4" mt="8" color='gray.400'>
        {testimonials?.map((_, index) => {
          const isActive = index === testimonialIndex
          return (
          <Circle
            key={`cirecle-${index}`}
            size={isActive ? "4" : "3"}
            bg={isActive ? content.colors.primary : 'gray.300'}
            onClick={() => setTestimonialIndex(index)}
            _hover={{
              cursor: 'pointer',
            }}
          />
        )})}
      </HStack>
    </Box>
  </MotionBox>
)
}