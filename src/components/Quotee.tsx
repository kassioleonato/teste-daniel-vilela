import {Box, BoxProps, Text} from '@chakra-ui/react'
import * as React from 'react'
import content from '../../content'

interface Props extends BoxProps {
  name: string
  jobTitle: string
}

export const Quotee = (props: Props) => {
  const {name, jobTitle, ...boxProps} = props
  return (
    <Box {...boxProps}>
      <Box mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold" color={content.colors.primary}>
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  )
}
