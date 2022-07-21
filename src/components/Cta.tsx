import {
  Box,
  BoxProps,
  Button,
  Container,
  Heading,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import { cta, ctaSecondary } from "utils/cta";
import content from "../../content";

const MotionBox = motion<BoxProps>(Box);
const MotionStack = motion<StackProps>(Stack);

export const Cta = () => (
  <MotionBox as="section" bg="gray.50" id="contact">
    <Container py={{ base: "16", md: "24" }}>
      <Box
        bg="bg-surface"
        boxShadow={"sm"}
        borderRadius="xl"
        px={{ base: "6", lg: "16" }}
        py={{ base: "10", lg: "16" }}
      >
        <Stack
          spacing="8"
          direction={{ base: "column", lg: "row" }}
          justify="space-evenly"
        >
          <Stack spacing="4" maxW="2xl">
            <Heading size="sm">Marcar consultas</Heading>
            <Text
              color="muted"
              fontSize={useBreakpointValue({ base: "lg", lg: "xl" })}
              whiteSpace={"break-spaces"}
            >
              {content.cta.content}
            </Text>
          </Stack>
          <Stack
            spacing="3"
            direction={{ base: "column", sm: "row" }}
            justify={"center"}
            alignItems={"center"}
          >
            <Button
              size="lg"
              bgColor={content.colors.buttonCollor}
              color="white"
              _hover={{
                cursor: "pointer",
                bg: content.colors.primary,
              }}
              onClick={cta}
            >
              Marcar consulta
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </MotionBox>
);
